// testing features
var elm = dimensions.get(window)

console.log(elm.height)
console.log(elm.width)
console.log(elm.half('x-axis'))
console.log(elm.half('y-axis'))


var parent = getElm('#rect');
var canvass = MakeCanvas('borrdssy');
parent.appendChild(canvass)