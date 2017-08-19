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


var canvas = MakeCanva('resizer');
canvas.width = 500;
canvas.height = 400
canvas.style.background = '#efefef'
canvas.style.border = '2px solid #bebebe'
parent.appendChild(canvas)

var ctx = canvas.getContext('2d');

ctx.fillStyle = '#58C9B9';
ctx.fillRect(20, 20, 120, 120);
ctx.fillStyle = '#44ee66';
ctx.fillRect(30, 30, 30, 44);

ctx.fillStyle = '#44ee66';
ctx.fillRect(100, 30, 30, 44);

// ctx.fillStyle = '#44ee66';
ctx.fillRect(30, 110, 100, 15);
ctx.save();

ctx.moveTo(10, 40) // where to start
ctx.lineTo(180, 40)
ctx.stroke()
ctx.save()

ctx.fillStyle = 'lightgreen'
ctx.strokeStyle = '#0e232e'
ctx.beginPath();
ctx.arc(230, 80, 50, 0, 2 * Math.PI)
ctx.lineWidth = 5
ctx.fill()
ctx.stroke()