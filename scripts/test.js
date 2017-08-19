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

var elm = dimensions.get(window)

console.log(elm.height)
console.log(elm.width)
console.log(elm.half('x-axis'))
console.log(elm.half('y-axis'))


var parent = getElm('#rect');

parent.style.backgroundColor = 'lavender';

var cnvs = MakeCanva('resizer');
cnvs.height = dimensions.get(window).height - 100;
cnvs.width = dimensions.get(window).width - 100;
cnvs.style.background = '#efefef'
parent.appendChild(cnvs)


