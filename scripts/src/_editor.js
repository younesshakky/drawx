(function (window) {
  var document = window.document;

  /** 
   * extend objects
   * a= extended; b= source
   *  */

  function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
  }
  
  // editor class

  function Editor (canvas, opts) {
    if (canvas) {
      if (typeof canvas == 'string') {
        this.canvas = getElm(canvas)
      }else {
        this.canvas = canvas
      }
      this.ctx = this.canvas.getContext('2d')
    }
    if (opts){
      this.options = opts
    }
  }


  Editor.prototype = {
    setImage: function (img) {
      this.ctx.drawImage(img, 0, 0)
    }
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
