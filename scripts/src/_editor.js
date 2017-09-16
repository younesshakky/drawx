(function (window) {
  var document = window.document;

  // editor class

  function Editor (canvas, opts) {
    if (canvas) {
      if (typeof canvas == 'string') {
        this.canvas = getElm(canvas)
      }else {
        this.canvas = canvas
      }
      this.context = this.canvas.getContext('2d')
    }
  }


  Editor.prototype.make = function () {
    console.log('hello from HELL!')
  }

  Editor.prototype.setImage = function (img) {
    var self = this;

  }

  window.Editor = Editor

})(this)

// how this class is used
// var ed = new Editor(mainCanvas, {
//   canvas: mainCanvas
// })


function makeCanva(id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas
}