// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var canvas = canvas || {};

(function () {


  // var Canvas = function (id) {
  //   this.id = id;
  // }

  // Canvas.dimensions = {} || canvas.dimensions

  // Canvas.dimensions.height = function (width) {
  //   var el = Canvas.el;
  //   if(!width){
  //     return el.width;
  //   }else {
  //     el.width = width;
  //     return el;
  //   }
  // }


  // verifications before getting canvas to function
  canvas.verify = {
    // verify if the playground is actually a canvas element
    isCanvas: function () {
      if (canvas.playground) {
        return (canvas.playground.constructor == HTMLCanvasElement) ? true : false;
      }
    },
    isInDom: function () {
      return (!!getElm('#' + canvas.playground.id) == true) ? true : false;
    }
  }

  // getting targeted canvas
  canvas.getcanva = function (id) {
    this.playground = document.getElementById(id)
    if (this.playground === null) {
      throw new Error(`i can't find any element associated with id "${id}" \n tnx!`)
    }
    return this.playground;
  }

  /**
   * create canvas without appending it to the Dom
   */


  // getting or setting canvas dimesions
  canvas.dims = {
    height: function (h) {
      // get the maximum height of window
      var wdMaxHeight = dimensions.get(window).height;
      var height = wdMaxHeight - 200;

      // setting height
      if (h) { height = h }

      if (height < 0) {
        // Note: it's a bug to fix later
        console.log('huh! ta malk mrid ', height)
        return 0;
      }
      return height
    },

    width: function (w) {
      // get the maximum width of window
      var wdMaxWidth = dimensions.get(window).width;
      var width = wdMaxWidth - 200;

      // setting height
      if (w) {
        width = w
      }
      if (width < 0) {
        // Note: it's a bug to fix later
        console.log('huh! ta malk mrid ', width)
        return 0
      }
      return width;
    }
  }

  // working with context
  canvas.context = function () {
    if (!this.playground) {
      throw new Error('wtf');
      // return;
    }
    return canvas.playground.getContext('2d');
  }
  // canvas events
  canvas.event = {

    mousedown: function () {
      canvas.verify.isMouseDown = true;
      // do stuff
    },
    drag: function () {
      if (!canvas.verify.isMousedown) {
        // don't do stuff
      }
      // do stuff, like consoling, seems a cool feature
      canvas.verify.isDragging = true
    },
    mouseover: function () {
      // if (canvas.verify.isMousedown){
      //   // do stuff
      // }

    }
  }

  // window.canvas = canvas

})()


// using elsewhere in the app
// ctx = canvas.context;

var Resizer = function (canvasElement) {
  var _canvas = canvasElement;
  var events = {
    mousedown: function (e) {
      events.isMouseDown = true;
    },
    mouseup: function () {
      events.isMouseDown = false;
    },
    mousemove: function (e) {
      if (this.isMouseDown) {
        _canvas.width = e.clientX + 30
        _canvas.height = e.clientY + 30
      }


    }
  }
  return {
    events,
    domElement: _canvas
  }
}

// -- hole new era

function makeCanva(id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas
}
