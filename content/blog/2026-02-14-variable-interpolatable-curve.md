---
title: "Variable interpolatable smooth curves and outlines"
author: Santhosh Thottingal
type: post
draft: true
date: 2026-02-18T05:00:00+05:30
url: /blog/2026/02/14/var-interpolatable-smooth-curves/
categories:
  - Type Design
  - Type Engineering
  - Rust
  - Curves
ShowToc: true
TocOpen: true
---

I am a type designer using non-conventional approaches to type design. Since 2020, I have been experimenting
with parametric type design approaches based on a modernized MetaPost approach. I have [written extensively
about this approach in this blog](https://thottingal.in/blog/2022/10/05/nupuram/). I have also published a paper[^2] on that.

One of the drawbacks of the MetaPost-based approach is that [MetaPost is quite old][1], actually older than me. It was written in the 1980s.
MetaPost was actually a modernization on top of [MetaFont by Knuth][5]. It did not have SVG support, but that was added in 2024.
MetaPost is written in literate programming language WEB, [then generating Pascal code from it][2]. Hence the tooling and developer
experience around it is quite suboptimal.
Extending it is also almost impossible.

While I was using MetaPost to design my last couple of typefaces, I was very curious about the underlying mathematics and 2D semantics that produce the smooth curves.
Aesthetics of smooth curves is one of my pet peeves. Some of you may know that my most successful typeface [Manjari][4] uses spiral splines for
smooth curves to achieve the pleasing aesthetics of the Malayalam script[^3]. The curves in Manjari was based on Spiral Splines by Raph Levien[^5]. I consider [Raph Levien][6] as one of the expert in curve semantics and I
actively follow his research and writings.

> A spline is a sequence of connected curves. A Bézier spline is a spline made up of Bézier curves.

A basic operation in MetaPost is defining a series of points and then drawing a smooth curve through them. The curves are defined using
Hobby's curve algorithm. Hobby's algorithm[^1] is a technique for fitting a curve onto a sequence of points on the plane,
such that it passes through all of the points in order. The resulting curves appear smooth and tend to form pleasant, relaxed shapes.
MetaPost provides multiple ways to control these curves beyond the points. We can specify the 'tension' of these curves,
we can define angle of entry and exit for the curve tangents through the points.

> **Note**
> For an in-depth reading on Hobby curves, refer this article: [Hobby’s algorithm for aesthetic Bézier splines][7]

In 2018, Raph Levien published [a new approach for smooth curve fitting][8], using a two-parameter curve approach[^4].
There is a [javascript implementation][9] and demo. I am embedding the demo below:


<iframe src="https://spline.technology/demo/" width="100%" height="520px"></iframe>

You may click on the canvas to add new points and you will see a smooth curve connecting them.

I read about this work in 2018, and the following set of features described in that article was quite interesting to me.

> **Quoting Raph Levien**
>
> An extremely important feature for font design is smooth transitions from smooth to curved sections; if you just weld a curved section to a straight line, the transition is visible. Spiro was good at this, but had a very confusing UX, involving “one-way constraints.” It was easy to get those backwards, and then your curve would be all over the place.
>
> The new spline solves this problem, but with a completely different approach to UX. Now you can set an explicit tangent on points, and when that lines up with a straight section, the curvature ramps up smoothly from zero at that point. You can see this on the right hand side of the “a” outline in the screenshot above.
>
>More generally, when explicit tangents would cause curvature discontinuity, the new spline just adjusts curvature along the curve so that it matches at the control point (the curvature at that point is “blend” of the raw curvatures).
>
>The net effect is more flexibility over the resulting shapes, intuitive control, and always smooth results (in the form of G2 continuity - if the artist wants to draw a lumpy line, there’s nothing preventing that).

This is exactly what MetaPost is doing inside, except with Hobby's curves. So If I build a system that uses Raph's smooth curve fitting for smooth curves,
that would be step 1 towards a modern parametric type design system. I have a dream to build a DSL based parametric type design system, inspired by MetaPost, but
not a generic drawing system as MetaPost, focused towards type design.

> **Note**
> One of the major shifts in software engineering that happened in the past several months is that AI agentic coding makes you capable of
> taking up projects that are more ambitious, projects that you postponed in the past. I am embracing this radical change and enjoying it a lot.

## Curve Fitting

Last November, I wrote a curve fitting program in Rust based on Raph Levien's two-parameter curve formulation. The algorithm accepts a sequence of 2D points (with optional tangent constraints) and produces a smooth cubic Bézier path that interpolates all input points while maintaining $G^2$ continuity within segments and $G^1$ continuity at corners.

The curve fitting algorithm operates in three phases:

1. **Preprocessing**: Raw input points are converted into control points with metadata, including point type classification (smooth, corner, or line-to-curve transitions)
2. **Optimization**: An iterative solver finds optimal tangent angles that minimize curvature discontinuities at interior points
3. **Rendering**: The optimized tangents are used to compute cubic Bézier control points and render the final curves

### The Two-Parameter Curve

As in the Hobby spline, the two-parameter curve family is a single cubic Bezier segment between each pair of control points.
The tangents are given by the parameters.

> For a more thorough introduction to Bézier curves, see [Freya Holmér’s excellent video.][11]
> {{< youtube  aVwxzDHniEw >}}

A cubic Bzier has two internal control points. Both must lie on the line tangent to the corresponding endpoint,
in order to enforce the given tangent constraint. That leaves merely the length the control arm
(the signed distance from the endpoint to the control point along the tangent vector) as a free parameter.
The new spline uses this simple function for the left control arm length, as a function of $\theta_0$ and $\theta_1$; the right arm is symmetrical:

\begin{aligned}
\mbox{arm length} & = \tfrac{5}{12}(\sin \theta_a - 0.2\sin 3\theta_a)
\end{aligned}

where,

\begin{aligned}
\theta_a & = \theta_0 - 0.3 \sin (2\theta_1 - 0.4\sin 2\theta_1) \\
\end{aligned}

Then, given this two-parameter curve, use a global solver to choose tangents so that the curvature is matched on both sides of each control point.


#### Curvature Optimization

The iterative solver adjusts tangent angles to minimize curvature discontinuity at interior points.
The solver uses a [damped Newton method][10] to find tangent angles that minimize curvature mismatch.
The damping factor increases with iteration count to ensure convergence.
For each point connecting two segments, the algorithm computes curvature at the end of the left segment ($\kappa_0$)
and at the start of the right segment ($\kappa_1$).

The curvature error is computed as:

\begin{aligned}
\text{err} = \text{atan2}\left(\sin(\kappa_0) \cdot c_1, \cos(\kappa_0) \cdot c_0\right) - \text{atan2}\left(\sin(\kappa_1) \cdot c_0, \cos(\kappa_1) \cdot c_1\right)
\end{aligned}

where $c_0 = \sqrt{d_0}$ and $c_1 = \sqrt{d_1}$ are the square roots of the adjacent chord lengths. This error formulation naturally accounts for the different scales of the two segments.

When explicit tangent constraints are provided at a point, the solver treats it as a fixed parameter rather than an optimization variable.

|Point Type|Behavior|Use Case|
|--------------|-----------|--------|
|Smooth|Optimizes tangent for smooth curvature|Default for interpolation|
|Corner|Fixed tangent, allows discontinuity|Sharp corners, explicit control|
|LineToCurve|Converts to corner with line tangent|Transitioning from straight to curved|
|CurveToLine|Converts to corner with line tangent|Transitioning from curved to straight|


The algorithm automatically converts Smooth points to Corner if the incoming and outgoing tangent angles differ by more than
1e-6 radians (approximately 0.00006 degrees).

When an explicit angle is provided, the solver treats it as a hard constraint and does not modify it during optimization. This allows precise control over curve shape at specific points.

Constraint Priority:

* Explicit angles (if provided): Used directly, never modified
* Line segment tangents: Computed from adjacent point positions for line-like segments
* Optimized tangents: Computed iteratively for smooth points without explicit constraints

The algorithm divides the curve into segments separated by corner points or explicit tangent constraints. Each segment is solved independently.

For closed curves, the algorithm identifies a starting point (preferably a corner) and processes segments in order, ensuring the first and last tangents match.

For segments without explicit endpoint constraints, the solver uses a specialized formula to compute appropriate endpoint tangents:

\begin{aligned}
endpointtangent = 0.5\sin(2\theta)
\end{aligned}

This formula ensures smooth transitions between segments by relating the interior tangent angle to the required endpoint tangent direction.

### Examples

|Description| Points(In metapost style) | Output|
|-----------|--------|-------|
| Simple diagonal line stroke | `(0,0)--(100,100)` | ![](/wp-content/uploads/2026/02/straight-line-fitted.svg)
| 90-degree corner with different incoming/outgoing angles | `(50,100)--(100,100)--(100,50)` | ![](/wp-content/uploads/2026/02/corner-angle-fitted.svg)|
| Letter O | `(100,50)..(150,100)..(100,150)..(50,100)..cycle` | ![](/wp-content/uploads/2026/02/letter-o-fitted.svg)
| Curve with explicit tangent constraints | `(50,100){dir 10}..{dir 90}(150,50)..(250,150)` |![](/wp-content/uploads/2026/02/metapost-style-fitted.svg)
| Simple 4-point wave curve | `(50,100)..(150,50)..(250,150)..(350,100)` |![](/wp-content/uploads/2026/02/wave-simple-fitted.svg)|


You may also try this in an [interactive demo available here](https://santhoshtr.github.io/kurbo-curve-fit-stroke/)

Following is a video recording of me drawing Malayalam letter 'va' with the curve fitting algorithm.

<video src="/wp-content/uploads/2026/02/curve-fit-demo.mp4" width="600" controls autoplay loop></video>

Source code for curve fitter is available here: https://github.com/santhoshtr/kurbo-curve-fit-stroke

## Parallel outline of a curve

[Parallel outline of a curve][12], often known as 'stroking' generates an outline around a given curve.
The original curve in the context is also called a skeleon curve.
It can also be defined as a curve whose points are at a constant normal distance from a given curve.

![Two definitions of a parallel curve: 1) envelope of a family of congruent circles, 2) by a fixed normal distance. Source https://en.wikipedia.org/wiki/Parallel_curve#/media/File:Offset-definition-poss.svg](https://upload.wikimedia.org/wikipedia/commons/a/a7/Offset-definition-poss.svg)


In the above image, two definitions of a parallel curve is illustrated: 1) envelope of a family of congruent circles, 2) by a fixed normal distance

Calculating accurate parallel curve for an arbitrary curve is quite complex. The exact offset curve of a cubic Bézier can be described using a bezier curve of degree 10. But such a curve is quite complex to calculate and work with.
Thus, in practice the approach is almost always to compute an approximation to the true parallel curve.
A single cubic Bézier might not be a good enough approximation to the parallel curve of the source cubic Bézier, so in those cases it is sudivided into multiple Bézier segments.[^6]

## Variable offset parallel curves
## Interpolatable Variable offset parallel curves

[1]: https://en.wikipedia.org/wiki/MetaPost
[2]: https://mirror.gutenberg-asso.fr/tex.loria.fr/prod-graph/mp.pdf
[3]: https://thottingal.in/documents/Spiral-Splines-Manjari.pdf
[4]: https://smc.org.in/fonts/Manjari
[5]: https://en.wikipedia.org/wiki/Metafont
[6]: https://raphlinus.github.io/
[7]: https://www.jakelow.com/blog/hobby-curves
[8]: https://raphlinus.github.io/curves/2018/12/21/new-spline.html
[9]: https://github.com/raphlinus/spline-research
[10]: https://en.wikipedia.org/wiki/Newton%27s_method_in_optimization
[11]: https://www.youtube.com/watch?v=aVwxzDHniEw
[12]: https://en.wikipedia.org/wiki/Parallel_curve

## References

[^1]: Hobby, John. D., <a href="https://link.springer.com/content/pdf/10.1007/BF02187690.pdf" rel="external">“Smooth, Easy to Compute Interpolating Splines”</a>, <em>Discrete and Computational Geometry</em>, 1986, vol. 1.
[^2]: Santhosh Thottingal,  <a href="https://arxiv.org/abs/2502.07386">Parametric type design in the era of variable and color fonts</a>
[^3]: Santhosh Thottingal and Kavya Manohar,  <a href="https://thottingal.in/documents/Spiral-Splines-Manjari.pdf">Spiral splines in typeface design, A case study of Manjari Malayalam typeface</a>
[^4]: Raph Levien, December 14, 2018, <a href="https://spline.technology/paper1.pdf">Bespoke splines</a>
[^5]: Raph Levien,  <a href="http://www.levien.com/phd/thesis.pdf">From Spiral to Spline: Optimal Techniques in Interactive Curve Design</a>
[^6]:  Raph Levien, <a href="https://raphlinus.github.io/curves/2022/09/09/parallel-beziers.html">Parallel curves of cubic Béziers</a>
