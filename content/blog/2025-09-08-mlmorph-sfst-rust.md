---
title: "Malayalam Morphology Analyzer Now Available as a Rust Crate"
author: Santhosh Thottingal
type: post
date: 2025-09-08T05:00:00+05:30
url: /blog/2025/09/08/mlmorph-rust-bindings/
categories:
  - Rust
  - mlmorph
  - sfst
  - Projects
---

I am excited to announce that the Malayalam morphology analyzer library, [mlmorph](https://morph.smc.org.in), is now available as a [Rust crate](https://crates.io/crates/mlmorph) on crates.io.

This Rust binding became possible thanks to the availability of Rust bindings for mlmorph's underlying library - the [Stuttgart Finite State Transducer (SFST) formalism](https://github.com/santhoshtr/SFST). You can find the SFST Rust crate [here](https://crates.io/crates/sfst).

The crate comes with comprehensive documentation and example usage to help you get started with Malayalam morphological analysis in your Rust projects.
