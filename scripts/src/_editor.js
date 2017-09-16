

(function (window) {
  var document = window.document;

  // editor class

  function Editor () {}


  Editor.prototype.make = function () {
    console.log('hello Editor.js')
  }

  window.Editor = Editor

})(this)

// -- hole new era

function makeCanva(id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas
}