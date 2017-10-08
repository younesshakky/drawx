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

    options: {
      container: document.querySelector('.st-layer')
    },

    setImage: function (img) {
      this.ctx.drawImage(img, 0, 0)
    },

    putText: function () {
      if (this.textInseted) {
        return false;
      }

      this.fieldContainer = createElement('div', {
        className: 'text-input-container',
        appendTo: getElm('.st-layer')
      })

      this.dragHold = createElement('div', {
        className: 'drag-hold',
        appendTo: this.fieldContainer
      })

      // button to enable edit mode
      this.editBtn = createElement('div', {
        id: 'drag-indic',
        className: 'icn icn-drag',
        // text: 'edit',
        appendTo: this.dragHold
      })

      // text-input
      this.textarea = createElement('div', {
        className: 'text-input',
        appendTo: this.fieldContainer,
        text: 'Edit this text'
      })

      this.textInseted = true
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
