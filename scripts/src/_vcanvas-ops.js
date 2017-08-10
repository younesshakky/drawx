// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var cnv = cnv || {};

function MakeCanvas (id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
}

styleText = 'background:red;padding:100px;margin:120px';

function setStyle (el, css) {
  var props = css.split(';');
  var prop = props.forEach(function(e) {
    return e.split('')
  });

  return prop;
}
