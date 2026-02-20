---
title: "Variable interpolatable smooth curves and outlines"
author: Santhosh Thottingal
type: post
date: 2026-02-20T05:00:00+05:30
url: /blog/2026/02/20/var-interpolatable-smooth-curves/
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
smooth curves to achieve the pleasing aesthetics of the Malayalam script[^3]. The curves in Manjari were based on Spiral Splines by Raph Levien[^5]. I consider [Raph Levien][6] as one of the experts in curve semantics and I
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
There is a [JavaScript implementation][9] and demo. I am embedding the demo below:


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

This is very close to MetaPost's core parametric curve handling system, except with Hobby's curves. So If I build a system that uses Raph's smooth curve fitting for smooth curves,
that would be step 1 towards a modern parametric type design system. I have a dream to build a DSL based parametric type design system, inspired by MetaPost, but
not a generic drawing system as MetaPost, focused towards type design.

In this article, I want to connect these pieces together and show a complete workflow. First, I will summarise Raph Levien's two-parameter spline and my Rust implementation of a curve fitting algorithm based on it. Then I will show how to use that to build variable-width strokes that remain interpolatable for variable fonts. Finally, I will explain a skeleton-based error correction method that fixes continuity problems at stroke segment joins while preserving interpolatability.

## Curve Fitting


Last November, I wrote a curve fitting program in Rust based on Raph Levien's two-parameter curve formulation. In this formulation, each segment between two points is controlled by two parameters: the tangent angle at the start point and the tangent angle at the end point. The algorithm accepts a sequence of 2D points (with optional tangent constraints) and produces a smooth cubic Bézier path that interpolates all input points while maintaining $G^2$ continuity within segments and $G^1$ continuity at corners.

The curve fitting algorithm operates in three phases:

1. **Preprocessing**: Raw input points are converted into control points with metadata, including point type classification (smooth, corner, or line-to-curve transitions)
2. **Optimization**: An iterative solver finds optimal tangent angles that minimize curvature discontinuities at interior points
3. **Rendering**: The optimized tangents are used to compute cubic Bézier control points and render the final curves

### The Two-Parameter Curve

As in the Hobby spline, the two-parameter curve family is a single cubic Bezier segment between each pair of control points.
The tangents are given by the parameters.

> For a more thorough introduction to Bézier curves, see [Freya Holmér’s excellent video.][11]
> {{< youtube  aVwxzDHniEw >}}

A cubic Bézier has two internal control points. Both must lie on the line tangent to the corresponding endpoint,
in order to enforce the given tangent constraint. That leaves merely the length of the control arm
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


### Curvature Optimization

The iterative solver adjusts tangent angles to minimize curvature discontinuity at interior points.
The solver uses a [damped Newton method][10] to find tangent angles that minimize curvature mismatch.
The damping factor increases with iteration count to ensure convergence.
For each point connecting two segments, the algorithm computes curvature at the end of the left segment ($\kappa_0$)
and at the start of the right segment ($\kappa_1$), and also the chord lengths $d_0$ and $d_1$ for those segments.

We want a scalar error that measures how badly the curvature mismatches at each join. Instead of simply taking $\kappa_0 - \kappa_1$, we want three things: symmetry between the two sides, sensitivity to scale (a given jump on a short segment matters more than on a long one), and good behaviour when angles wrap modulo $2\pi$.
We define

\begin{aligned}
c_0 & = \sqrt{d_0}, \\
c_1 & = \sqrt{d_1}.
\end{aligned}

You can think of $c_0$ and $c_1$ as the two axes of an ellipse. Each curvature value is mapped to a point on that ellipse, and we compare their angles there. The curvature error is then

\begin{aligned}
\text{err} = \text{atan2}\bigl(\sin(\kappa_0)c_1\, \cos(\kappa_0)c_0\bigr) - \text{atan2}\bigl(\sin(\kappa_1)c_0\, \cos(\kappa_1)c_1\bigr)
\end{aligned}

Here $\text{atan2}(\sin(\kappa), \cos(\kappa))$ is the usual way to turn sine/cosine back into a wrapped angle. The $c_0$ and $c_1$ factors skew the unit circle into an ellipse whose axes depend on the chord lengths, so the error naturally weights the two sides according to their scale. When $\kappa_0$ and $\kappa_1$ agree in this elliptical sense, the error is zero; otherwise it gives a signed measure of how much the curvature twists across the join.

![Curvature error measured as the angular difference between κ₀ and κ₁ on an ellipse scaled by chord lengths c₀ and c₁](/wp-content/uploads/2026/02/curve-correction.png)

When explicit tangent constraints are provided at a point, the solver treats it as a fixed parameter rather than an optimization variable.

|Point Type|Behavior|Use Case|
|--------------|-----------|--------|
|Smooth|Optimizes tangent for smooth curvature|Default for interpolation|
|Corner|Fixed tangent, allows discontinuity|Sharp corners, explicit control|
|LineToCurve|Converts to corner with line tangent|Transitioning from straight to curved|
|CurveToLine|Converts to corner with line tangent|Transitioning from curved to straight|


The algorithm automatically converts Smooth points to Corner if the incoming and outgoing tangent angles differ by more than 1e-6 radians. This threshold is effectively a floating-point epsilon — it catches cases where the geometry is numerically discontinuous rather than semantically distinguishing nearly-smooth from truly-smooth joints.

When an explicit angle is provided, the solver treats it as a hard constraint and does not modify it during optimization. This allows precise control over curve shape at specific points.

Constraint Priority:

* Explicit angles (if provided): Used directly, never modified
* Line segment tangents: Computed from adjacent point positions for line-like segments
* Optimized tangents: Computed iteratively for smooth points without explicit constraints

The algorithm divides the curve into segments separated by corner points or explicit tangent constraints. Each segment is solved independently.

For closed curves, the algorithm identifies a starting point (preferably a corner) and processes segments in order, ensuring the first and last tangents match.

For segments without explicit endpoint constraints, the solver uses a specialized formula to compute appropriate endpoint tangents:

\begin{aligned}
\text{endpoint tangent} = 0.5\sin(2\theta)
\end{aligned}

This formula ensures smooth transitions between segments by relating the interior tangent angle to the required endpoint tangent direction.

### Examples

|Description| Points(In metapost style) | Output|
|-----------|--------|-------|
| Simple diagonal line stroke | `(0,0)--(100,100)` | ![](/wp-content/uploads/2026/02/straight-line-fitted.svg)|
| 90-degree corner with different incoming/outgoing angles | `(50,100)--(100,100)--(100,50)` | ![](/wp-content/uploads/2026/02/corner-angle-fitted.svg)|
| Letter O | `(100,50)..(150,100)..(100,150)..(50,100)..cycle` | ![](/wp-content/uploads/2026/02/letter-o-fitted.svg)|
| Curve with explicit tangent constraints | `(50,100){dir 10}..{dir 90}(150,50)..(250,150)` |![](/wp-content/uploads/2026/02/metapost-style-fitted.svg)|
| Simple 4-point wave curve | `(50,100)..(150,50)..(250,150)..(350,100)` |![](/wp-content/uploads/2026/02/wave-simple-fitted.svg)|


> You may also try this in an [interactive demo available here](https://santhoshtr.github.io/kurbo-curve-fit-stroke/)

Following is a video recording of me drawing Malayalam letter 'va' with the curve fitting algorithm.

<video src="/wp-content/uploads/2026/02/curve-fit-demo.mp4" width="100%" controls autoplay loop></video>

> Source code for curve fitter is available here: https://github.com/santhoshtr/kurbo-curve-fit-stroke


## Parallel outline of a curve

[Parallel outline of a curve][12], often known as 'stroking' generates an outline around a given curve.
The original curve in the context is also called a skeleton curve.
It can also be defined as a curve whose points are at a constant normal distance from a given curve.

![Two definitions of a parallel curve: 1) envelope of a family of congruent circles, 2) by a fixed normal distance. Source https://en.wikipedia.org/wiki/Parallel_curve#/media/File:Offset-definition-poss.svg](/wp-content/uploads/2026/02/Offset-definition-poss.svg.png)


In the above image, two definitions of a parallel curve is illustrated: 1) envelope of a family of congruent circles, 2) by a fixed normal distance. [source](https://commons.wikimedia.org/wiki/File:Offset-definition-poss.svg)

Calculating accurate parallel curve for an arbitrary curve is quite complex. The exact offset curve of a cubic Bézier can be described using a bezier curve of degree 10. But such a curve is quite complex to calculate and work with.
Thus, in practice the approach is almost always to compute an approximation to the true parallel curve.
A single cubic Bézier might not be a good enough approximation to the parallel curve of the source cubic Bézier,
so in those cases it is subdivided into multiple Bézier segments.[^6]

> For a detailed explanation on why offsetting a bezier curve is hard, see [pomax's "A primer on bezier curves"][13]

I am using Kurbo rust library for the explorations outlined in this article.
The [Kurbo library][14] has a stroke algorithm to expand a path (skeleton or a list of
connected Cubic curves) with a given offset $d$. It works well and is based on extensive
research by the Kurbo team.


I adapted the system to try variable stroking where the value of $d$ varies at curve joints.
This is useful in illustrating variable thickness letters. It reuses most of the
code from the Kurbo library. Wherever the constant value $d$ is used, a value from an array of varying
widths is supplied.

![](/wp-content/uploads/2026/02/variable-stroke-non-interpolatable.webp)

The resulting stroke outline is acceptable to the eye, but not great in terms of the number of points in the outline.

As I mentioned earlier, my objective is to see if such outlines can be used in type engineering (font making),
especially for variable fonts. However, variable fonts need interpolatable shapes.

For glyphs to interpolate correctly, they must be compatible across all masters. This means they must have the:

* Same number of paths and points.
* Same contour order.
* Same starting point for each contour.

The unpredictable number of points in the outline as the input widths change is not acceptable for that workflow.
There are curve simplification algorithms, but they are also not usable as they add non-deterministic points.

Following is a video illustrating the interpolating nature of a glyph 'e' when the glyph outlines pass the above three conditions.

<video src="/wp-content/uploads/2026/02/interpolatable-e.mp4" width="100%" controls autoplay loop></video>

> If you like to observe how interpolation works for variable fonts, [SAMSA Interpolator is a good tool][17]

## Interpolatable Variable Strokes
Before abandoning the above approach of using a custom parallel curve constructor with substituted offsets, I tried to see if I can make the curve points constant.
In the above curve, if you look carefully, you can see that the subdivisions in outlines are sometimes two, sometimes three.
Initially I set a fixed, 4 sub-divisions for every path segment. But later I changed it to dynamic based on the curvature of the source path.

The resulting curves are interpolatable but lost the perfection from the previous step.
where the stroke calculation was based on a complex error reduction strategy. My approach reduced that to a
simpler [Tiller-Hanson-like approach][15]. This subdivision approach is discussed in detail in Raph's parallel bezier curve essay for constant offset curves[^6]

![](/wp-content/uploads/2026/02/variable-stroke-interpolatable-subdivisions.webp)

When I [shared][16] this work with the Kurbo team, Raph suggested using a linear perturbation system:

$B_{offset}(t) = B(t) + w(t) \cdot D(t)$

*   **$B(t)$**: This is our **Source Spine** (the cubic Bézier you are stroking).
*   **$w(t)$**: The **width** (half-width) at parameter $t$. For a constant-width stroke this is a scalar; for variable strokes it varies along the curve.
*   **$D(t)$**: This is a **"Direction Curve"**. It represents the unit normal vector along the spine, approximated as a cubic Bézier itself. Concretely, we evaluate the true unit normals at $t=0$, $t=0.5$, and $t=1$ of the spine segment, then fit a cubic Bézier through those three normal vectors. This gives us a smooth Bézier approximation of the normal field that can be combined with $B(t)$ using simple arithmetic.

Intuitively, instead of trying to calculate a perfect parallel curve
(which is mathematically impossible to represent exactly as a Bézier),
we are creating a "vector field" that points outwards from the curve.

1.  Define a curve $D(t)$ that represents "Straight Out" (Normal) along the spine.
2.  To generate the offset, take the spine point $B(t)$ and add $D(t)$ multiplied by the width at that point.

Why does this guarantee interpolatability? If you have a "Thin" shape and a "Bold" shape,
they share the exact same $B(t)$ and $D(t)$. The *only* thing that changes is $w(t)$ (the width).
Because the formula is **linear** (it's just addition), point $P_{offset}$
moves in a straight line as you increase the weight.
This is the definition of perfect variable font interpolation. Since we keep the same sampling of $B(t)$ and $D(t)$ for all masters, all three requirements above for variable fonts are satisfied: the number of points and paths stays fixed, the contour order is unchanged, and the starting point for each contour is consistent.

Instead of my dynamic curvature-based sub-divisions, Raph recommended using a single midpoint.
Since we know the start point (from $t=0$) and the end point (from $t=1$),
and we know the tangents (from the derivative formula below),
we still have degrees of freedom: **how long are the control handles?**
Raph suggests calculating the exact offset point at $t=0.5$ (the middle).
You then mathematically solve for the handle lengths that force the cubic curve to pass through that middle point.
This is deterministic and fast.

The endpoint tangents for variable offset are $(1 + \kappa w)x' + n w'$

This formula tells you exactly **what direction the offset curve is pointing** at any moment $t$.


$$toffset = (1 + \kappa w)x' + nw'$$

Part A: The "Parallel" Movement

*   **$x'$**: This is the tangent of the spine (moving forward along the road).
*   **$w$**: The current width (half-width), i.e. $w(t)$.
*   **$\kappa$**: The curvature (how tight the turn is).

Part B: The "Taper" Movement - sideways push
*   **$n$**: The Unit Normal (pointing 90° sideways).
*   **$w'$**: The **Derivative of Width** (The slope). How fast is the width changing?

If the pen is getting wider ($w' > 0$), the edge of the ink must move **outwards** away from the center.
This adds a sideways vector component.



This approach had one limitation though. While the outline curve is smooth for a segment, at segment joints,
kinks (sharp jumps) can happen when such segments are joined.
Since the tangent calculation based on $(1 + \kappa w)x' + nw'$ needs some
updates to handle the case of segment joins.


The sideways movement of the stroke, based on how much the width
changes per segment — $w'$ — is rapid when segment A and B have different lengths. This changes the angle of the offset curve,
creating the kink you see here:

![G1 Continuity Error at Segment Joints](/wp-content/uploads/2026/02/var-interpolation-continuity-error.png)

So we need an error correction mechanism at segment joins to get $G^1$ continuity.

> **Curve continuity**
> There are different levels of geometric curve continuity. Higher continuity is required to create smoother and more natural curves.
> * G0: Two Curves are connected, but only their positions match at the connection point.
> * G1: Two Curves are connected, and their positions and directions match at the connection point.
> * G2: Two Curves are connected, and their positions, directions, and curvatures match at the connection point.
> * G3: Two Curves are connected, and their positions, directions, curvatures, and curvature change rates match at the connection point.
> ![Curve continuity](/wp-content/uploads/2026/02/curve-continuity.webp)
> Illustration from https://doc.plasticity.xyz/cad-essentials/continuity-curve-and-surface

> For a more thorough introduction to curve continuity,  see Freya Holmér’s excellent video
> {{< youtube jvPPXbo87ds >}}

## Error Correction Based on Skeleton

The variable-width stroking process, while mathematically elegant,
introduces challenges at segment boundaries where the width changes dynamically.
The stroke outline can have $G^1$ continuity errors (directional discontinuities) at these joints due
to the complex interplay between curvature, width taper, and segment transitions.

To address this, we employ a **multi-stage error correction strategy** that leverages
the original skeleton (the input curve) as a reference guide for fixing problematic points.

When we stroke a curve with variable width using the linear perturbation formula

$$B_{offset}(t) = B(t) + w(t) \cdot D(t)$$

the offset curve is smooth within each segment, but at segment joints where two different segments meet it can still develop visible kinks. This happens for three reasons at once: the rate of width change ($d'$) can jump between segments, the curvature of the skeleton may change at the join, and the direction curve $D(t)$ may also shift. Together, these effects make the tangent direction of the stroke jump at some outline points.

To fix this, I run a multi-stage process embedded in the `refit_stroke()` function.

### Stage 1a: Extract and Classify Outline Points

When the stroke outline is generated, I first extract its on-curve points — the corner-like features where segments join — and compute the incoming and outgoing tangent angles at each of them. Based on how different those two angles are, the point is classified as either a "Corner" (angles differ significantly) or "Smooth" (angles match within a tolerance). The threshold for this classification is configurable; for variable-width strokes I use 15° as a reasonable default.

**Example: Variable-width stroke outline (wave-simple test case)**


| Original Curve | Stroke Outline | After Stage 1 Correction |
|---|---|---|
| ![](/wp-content/uploads/2026/02/wave-simple-fitted.svg) | ![](/wp-content/uploads/2026/02/wave-simple-stroke.svg) | ![](/wp-content/uploads/2026/02/wave-simple-refitted.svg) |

### Stage 1b: Detect Misclassified Corners (With Skeleton)

If skeleton information is available, I do a second pass. Each outline point is matched to its closest skeleton point (within 2.0 units). For points that the first stage marked as "Corner", I now check what the corresponding skeleton point says — if the skeleton considers that location smooth, the corner on the outline is probably just a stroking artefact. In that case I borrow the skeleton's incoming and outgoing tangent directions, replace the outline-derived angles, and re-classify the point as "Smooth".

**Example: Skeleton-aware correction catches false corners**

![Skeleton-Aware Correction Workflow](/wp-content/uploads/2026/02/wave-simple-skeleton-correction.svg)

### Stage 2: Detect and Correct $G^1$ Failures (With Skeleton)

After this first clean-up, there can still be $G^1$ continuity failures — places where the incoming and outgoing tangents differ by more than a tiny threshold (I use 0.5°, which is a visually meaningful difference for these curves). For each such point, if I can match it confidently to a skeleton point, I again take the skeleton's tangent direction as the ground truth and override the outline-derived angle. Then I re-run the $G^1$ smoothing on the neighbourhood so that the correction propagates to nearby points. This step is deliberately conservative: only points that actually fail the $G^1$ test are touched, and only when the skeleton match is within 2.0 units.

### Stage 3: Fit the Refined Curve

Once these corrections are applied, I send the outline points back through the same curve fitting algorithm described earlier. At this point the point classifications are cleaner (fewer false corners) and the tangent angles at the joins have been validated or corrected using the skeleton as a reference. With that improved constraint set, the two-parameter curve fitter produces a new outline that respects the original geometry while smoothing out the stroking-induced discontinuities. At segment joints I explicitly aim for $G^1$ continuity (matching position and direction); I do not attempt to enforce $G^2$ continuity of curvature on the outline.


Now let us try the Malayalam letter va again, this time with stroke:

<video src="/wp-content/uploads/2026/02/interpolatable-va.mp4" width="100%" controls autoplay loop></video>

As you can see, we get variable smooth stroke. And it is interpolatable for width by retaining the number of points.

Thanks for reading!

---
## Notes

* Thanks to Raph Levien for the inputs. The above approach is an engineer's approximation. Raph and Kurbo team is actively working on better algorithms and I am eagerly looking forward for that.
* One of the major shifts in software engineering that happened in the past several months is that AI agentic coding makes you capable of taking up projects that are more ambitious, projects that you postponed in the past. I am embracing this radical change and enjoying it a lot.*
* What next? I wanted to focus on the DSL based type design system and use this curve generation as core backend.
* I found Deepwiki can generate detailed explanation of code repositories. Checkout [deepwiki documentation of this exploration](https://deepwiki.com/santhoshtr/kurbo-curve-fit-stroke)


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
[13]: https://pomax.github.io/bezierinfo/#offsetting
[14]: https://github.com/linebender/kurbo
[15]: https://math.stackexchange.com/questions/465782/control-points-of-offset-bezier-curve
[16]: https://xi.zulipchat.com/#narrow/channel/260979-kurbo/topic/Variable.20interpolatable.20stroke.20expansion/with/568408959
[17]: https://www.axis-praxis.org/samsa/
[18]: https://www.youtube.com/watch?v=jvPPXbo87ds

## References

[^1]: Hobby, John. D., <a href="https://link.springer.com/content/pdf/10.1007/BF02187690.pdf" rel="external">“Smooth, Easy to Compute Interpolating Splines”</a>, <em>Discrete and Computational Geometry</em>, 1986, vol. 1.
[^2]: Santhosh Thottingal,  <a href="https://arxiv.org/abs/2502.07386">Parametric type design in the era of variable and color fonts</a>
[^3]: Santhosh Thottingal and Kavya Manohar,  <a href="https://thottingal.in/documents/Spiral-Splines-Manjari.pdf">Spiral splines in typeface design, A case study of Manjari Malayalam typeface</a>
[^4]: Raph Levien, December 14, 2018, <a href="https://spline.technology/paper1.pdf">Bespoke splines</a>
[^5]: Raph Levien,  <a href="http://www.levien.com/phd/thesis.pdf">From Spiral to Spline: Optimal Techniques in Interactive Curve Design</a>
[^6]:  Raph Levien, <a href="https://raphlinus.github.io/curves/2022/09/09/parallel-beziers.html">Parallel curves of cubic Béziers</a>
