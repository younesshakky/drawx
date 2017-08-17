// // testing features
var elm = dimensions.get(window)

console.log(elm.height)
console.log(elm.width)
console.log(elm.half('x-axis'))
console.log(elm.half('y-axis'))


var parent = getElm('#rect');

parent.style.backgroundColor = 'darkred';

var cnvs = MakeCanva('resizer');
cnvs.style.background = 'red'
parent.appendChild(cnvs)

var resizer = new Resizer(cnvs);

var resize = resizer.domElement;

console.log(resizer)
resize.onmousedown = function (e) {
  resizer.events.mousedown(e)
}

resize.onmouseup = function (e) {
  resizer.events.mouseup(e)
}

resize.onmousemove = function (e) {
  resizer.events.mousemove(e)
}

// resize.onmousemove = resizer.events.mousemove



// getElm('#canvahey').onclick = function (ev) {
//   alert('canvahey clicked : ' + ev.bubbles)
// }

// 


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


