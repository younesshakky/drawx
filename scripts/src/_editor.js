

(function (window) {
  var document = window.document;

  // editor class

  function Editor () {}

  // experimental method
  Editor.prototype.log = function () {
    console.log('hello Editor.js')
  }

  window.Editor = Editor

})(this)

// -- hole new era

function makeCanva(id) {
  var canvas = createElement('canvas', {
    id: id
  })

  return canvas
}