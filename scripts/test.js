// testing features
var elm = dimensions.get(window)

console.log(elm.height)
console.log(elm.width)
console.log(elm.half('x-axis'))
console.log(elm.half('y-axis'))

dimensions.prototype = {
  get width (){
    return this.el.width;
  }
}