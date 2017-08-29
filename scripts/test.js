// // testing features

// var getDOM = function (selector) {
//   getDOM.el = el;
//   this.find = function () {
//     console.log("hey")
//   }
//   var el = document.querySelector(selector);
//   if(!getDOM.hasOwnProperty('find')) {
//     console.log('pufff')
//     return el;
//   }
//   return {
//     el,
//     find: function (s) {
//       console.log(this.el.querySelector(s))
//     }
//   }
// }

// var elm = dimensions.get(window)

// console.log(elm.height)
// console.log(elm.width)
// console.log(elm.half('x-axis'))
// console.log(elm.half('y-axis'))

/*=============================================*/
/*=============================================*/

var parent = getElm('#rect');


var canvas = makeCanva('acanvas');
canvas.width = 500;
canvas.height = 400
canvas.style.background = '#efefef'
canvas.style.border = '2px solid #bebebe'
parent.appendChild(canvas)

var ctx = canvas.getContext('2d');


const myText = 'texting is cool!'
const axis = {
  x: 30,
  y: 220
}


// ctx.clearRect(0, 0, canvas.width, canvas.height)



function draw (event) {
  var i = 10;
  this.randSize  = 30;
  while (i--){
    ctx.beginPath()
    ctx.lineWidth = 1;
    ctx.arc(
      event.clientX - 15,
      event.clientY - 10,
      randSize--,
      randSize--,
      0,
      2 * Math.PI
    )
    ctx.lineJoin = 'round'
  console.log(this.randSize)
  
  }
  // ctx.moveTo(event.clientX, event.clientY);
  ctx.stroke();

  return [event.clientX, event.clientY]
}

var isMouseDown;

canvas.onmousedown = function (e) {
  isMouseDown = true;
  draw(e);
}

canvas.onmousemove = function (e) {
  if (isMouseDown){
    draw(e)
    console.log(draw(e)) 
  }

}

canvas.onmouseup = function () {
  isMouseDown = false;
}


var start = canvas.width;
var finish = canvas.height;


function drawArc(x, y){
  ctx.strokeStyle = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
  ctx.beginPath()
  ctx.lineWidth = 3;
  ctx.arc(
    x,
    y,
    start,
    canvas.height - finish--,
    0,
    2 * Math.PI
  )
  ctx.stroke();
}

function autodraw () {
  ctx.strokeStyle = 'green'
  drawArc( start-=1.4, 30  )
  ctx.moveTo(start, finish)
  // setTimeout(
  //   function () {
  //     drawArc(start, finish-=1.4)
  //   }, 10)


  setTimeout(() => requestAnimationFrame(autodraw), 0)
  

}

eventOn(window, 'load resize', function () {
  // css(canvas, {
  //   width: dimensions.get(window).width + 'px',
  //   height: dimensions.get(window).height + 'px'
  // })
  canvas.width = dimensions.get(window).width
  canvas.height = dimensions.get(window).height
})

css(canvas, {
  position: "absolute",
  left: "0px",
  top: "0px"
})

// requestAnimationFrame(autodraw)