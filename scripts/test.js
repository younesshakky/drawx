// // testing features
// var elm = dimensions.get(window)

// console.log(elm.height)
// console.log(elm.width)
// console.log(elm.half('x-axis'))
// console.log(elm.half('y-axis'))


// var parent = getElm('#rect');
// var canvass = MakeCanva('borrdssy');
// parent.appendChild(canvass)


var $ = function (selector) {
  var el = document.querySelectorAll(selector);
  if(el.length == 1){
    return el[0];
  }

  elmsArray = []

  for (var i = 0; i < el.length;i++){
    elmsArray.push(el[i])
  }

  // var elms = [el].
  return elmsArray

}


$('.ui_elm').map(function (e) {
  e.style.display = 'block';
  e.style.backgroundColor = 'red';
});
