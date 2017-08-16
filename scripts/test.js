// // testing features
var elm = dimensions.get(window)

console.log(elm.height)
console.log(elm.width)
console.log(elm.half('x-axis'))
console.log(elm.half('y-axis'))


var parent = getElm('#rect');

parent.style.backgroundColor = 'darkred';

var canvass = MakeCanva('canvahey');
parent.appendChild(canvass)

var canvass = MakeCanva('wouff');
parent.appendChild(canvass)

getElm('#rect').onclick = function (ev) {
  this.style.backgroundColor = 'darkred'
  console.log(ev.offsetX, ev.offsetY)
  console.log(ev.clientX, ev.clientY)
  // alert('rect clicked : ' + ev.bubbles)
}

// getElm('#canvahey').onclick = function (ev) {
//   alert('canvahey clicked : ' + ev.bubbles)
// }

// 


var getDOM = function (selector) {
  getDOM.el = el;
  this.find = function () {
    console.log("hey")
  }
  var el = document.querySelector(selector);
  if(!getDOM.hasOwnProperty('find')) {
    console.log('pufff')
    return el;
  }
  return {
    el,
    find: function (s) {
      console.log(this.el.querySelector(s))
    }
  }

}


