# This is a very cool guide to html5 canvas

ok let's see what's MDN says : 

> `<canvas>` is an HTML element which can be used to draw graphics using scripting (usually JavaScript). This can, for instance, be used to draw graphs, make photo composition or simple (and not so simple) animations. The images on this page show examples of `<canvas>` implementations which will be created in this tutorial.

How about you w3schools : 
> The HTML `<canvas>` element is used to draw graphics, on the fly, via JavaScript.
The `<canvas>` element is only a container for graphics. You must use JavaScript to actually draw the graphics.
Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

#### Now we know wtf is canvas, maybe?

# Let's dig into code, hooray!!
so how to actualy put canvas to work?
### first things first :
we need to set our canvas tag into our html file

```html
<canvas id="my-nice-canvas"><canvas>
```
we need this `id` attribute to target the element in javascript code

### let's give our tag a super-power, huh!

```js
// targeting out our element
const canvas = document.getElementById('my-nice-canvas')
// selecting drawing context
const context = canvas.getContext('2d')
```
> not so cool enough?

### let's draw a cool aquish (from aqua :grin: ) rectangle

```js
context.fillStyle = '#58C9B9'
/** params: (x, y, width, height) */
context.fillRect(20, 20, 120, 120)
```

### too Small ?

Your canvas actually looks small than your ambitions! let's bump up the size a bit.

```js
canvas.width = 500
canvas.height = 400
```

You can also do that

```html
<canvas id="my-nice-canvas" width="500" height="400"><canvas>
```

### we can draw lines too

let's do a straight line

```js
ctx.moveTo(10, 40) // where to start
ctx.lineTo(180, 40)
ctx.stroke()
```

### How about drawing circles? 
we can do **circles** too.. but look it will seems like math.. but it isn't _(im lying tho)_!

let's see what w3resources are saying:

> The radian is the standard unit of angular measure, used in many areas of mathematics. An angle's measurement in radians is numerically equal to the length of a corresponding arc of a unit circle, so one radian is just under 57.3 degrees (when the arc length is equal to the radius). The radian is represented by the symbol rad An alternative symbol is the superscript letter c. So for example, a value of 1.3 radians could be written as 1.3 rad or 1.3c. See the following diagram:
![Circle_radians.gif](http://www.w3resource.com/w3r_images/Circle_radians.gif)

did you have understand something? me neither, **but it's not that complex :**

 ```js
ctx.fillStyle = 'lightgreen'
ctx.beginPath();
/** params: (x, y, radius, startAngle, endAngle, direction) */
ctx.arc(100, 100, 50, 0, 2 * Math.PI)
ctx.fill()
 ```
Another one

```js
ctx.fillStyle = 'red'
ctx.strokeStyle = '#0e232e'
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI)
ctx.lineWidth = 5
ctx.fill()
ctx.stroke()
```
[more deep (mathy) crap about arcs on w3resources](http://www.w3resource.com/html5-canvas/html5-canvas-arc.php)