# This is a very cool guide to HTML5 canvas

> note: that's just a personal guide, documenting my  journey using&learning HTML5 canvas in this project

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

Your canvas actually looks smaller than your ambitions! let's bump up the size a bit.

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
// where to start
// params: (x, y)
context.moveTo(10, 40)
context.lineTo(180, 40)
context.lineWidth = 4
context.stroke()
```

### How about drawing circles? 
we can do **circles** too.. but look it could seem a little bit like math.. but it isn't!! _(im lying tho)_!

let's see what w3resources are saying:

> The radian is the standard unit of angular measure, used in many areas of mathematics. An angle's measurement in radians is numerically equal to the length of a corresponding arc of a unit circle, so one radian is just under 57.3 degrees (when the arc length is equal to the radius). The radian is represented by the symbol rad An alternative symbol is the superscript letter c. So for example, a value of 1.3 radians could be written as 1.3 rad or 1.3c. See the following diagram:
![Circle_radians.gif](http://www.w3resource.com/w3r_images/Circle_radians.gif)

did you have understand something? me neither, **but it's not that complex :**

 ```js
context.fillStyle = 'lightgreen'
context.beginPath();
/** params: (x, y, radius, startAngle, endAngle, direction) */
context.arc(100, 100, 50, 0, 2 * Math.PI)
context.fill()
 ```
Another one

```js
context.fillStyle = 'red'
context.strokeStyle = '#0e232e'
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI)
context.lineWidth = 5
context.fill()
context.stroke()
```
[more deep (mathy) crap about arcs on w3resources](http://www.w3resource.com/html5-canvas/html5-canvas-arc.php)

### guess what? we can do texts also!
so how? fairly simple

```js
// setting font

context.font = '30px Arial'
context.fillText('texting is cool!', 120, 120)

```

what about doing something cool with text? a meme style text? why not!

> note: you must download "impact" font

```js
const myText = 'texting is cool!'
const axis = {x: 120, y: 220}
context.font = 'bold 30px impact'
// white fill layer
context.fillStyle = "white"
context.fillText(myText, axis.x, axis.y)
// black stroke layer
context.strokeStyle = 'black'
context.lineWidth = 2
context.strokeText(myText, axis.x, axis.y)
```

<!-- ## Here comes the best (& worst part) : **Images** -->


