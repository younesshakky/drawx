// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var cnv = cnv || {};

/**
 * create canvas without appending it to the Dom
 */
function MakeCanvas (id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
}