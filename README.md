# Marching Squares.js
![Marching Squares](assets/marching-squares.gif)

## Summary
I was inspired by the coding train video [Coding Marching Squares](https://youtu.be/Mm2eYfj0SgA?feature=shared) to implement my own version of marching squares algorithm.
Essentially, it is an algorithm that converts adjacent cell values to a lookup number that corresponds to a [contour line](https://en.wikipedia.org/wiki/Marching_squares).

Coding Train, as always, explained it far better than I could. I highly recommend checking out his video. I did not use any code from him directly, except for using the same noise generator that he used.

My version comes with adjustable settings that change how to visuals look, so please enjoy and experiment!

## Fun Fact
I got carried away and implemented a multi-dimensional array library from scratch for this project!

## How it works
- You start by creating three dimensional noise. I used [open simplex noise](https://gist.github.com/KdotJPG/b1270127455a94ac5d19) because of its organic look.
- You sample from neighboring noise values and convert them into a single integer.
- This number is used to get the shape appropriate shape of the contour we would like to draw.
- For smoother boundary, use [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).

## How to Install
- Just clone or download the files. You can use variety of ways to host the website locally.
- I use live server from VS Code.

## How to "Play"
- There are four sliders you can control.
- With the sliders you can toggle the background grid, change the speed of animation, zoom in, and adjust the thickness of the lines.