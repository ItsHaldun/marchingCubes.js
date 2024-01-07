# Marching Squares.js
<img src="assets/marching-squares.gif" width="100%">

## Summary
I was inspired by the coding train video <a target="_blank" href="https://youtu.be/Mm2eYfj0SgA?feature=shared">Coding Marching Squares</a> to implement my own version of marching squares algorithm.
Essentially, it is an algorithm that converts adjacent cell values to a lookup number that corresponds to a <a target="_blank" href="https://en.wikipedia.org/wiki/Marching_squares">contour line</a>.
Coding Train, as always, explained it far better than I could. I highly recommend checking out his video. I did not use any code from him directly, except for using the same noise generator that he used.
My version comes with adjustable settings that change how to visuals look, so please enjoy and experiment!

## Fun Fact
I got carried away and implemented a multi-dimensional array library from scratch for this project!

## How it works
- You start by creating three dimensional noise. I used <a target="_blank" href="https://gist.github.com/KdotJPG/b1270127455a94ac5d19">open simplex noise</a> because of its organic look.
- You sample from neighboring noise values and convert them into a single integer.
- This number is used to get the shape appropriate shape of the contour we would like to draw.
- For smoother boundary, use <a target="_blank" href="https://en.wikipedia.org/wiki/Linear_interpolation">linear interpolation</a>.

## How to Install
- Just clone or download the files. You can use variety of ways to host the website locally.
- I use live server from VS Code.

## How to "Play"
- There are four sliders you can control.
- With the sliders you can toggle the background grid, change the speed of animation, zoom in, and adjust the thickness of the lines.