// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var cnv = cnv || {};


// verifications before getting canvas to function
cnv.verify = {
  // verify if the playground is actually a canvas element
  isCanvas: function () {
    if (cnv.playground){
      return (cnv.playground.constructor == HTMLCanvasElement) ? true : false;
    }
  },
  isInDom: function () {
    return (!!getElm('#' + cnv.playground.id) == true) ? true : false;
  }
}

// getting targeted canvas
cnv.getcanva = function (id) {
  this.playground = document.getElementById(id)
  if(this.playground === null){
    throw new Error(`i can't find any element associated with id "${id}" \n tnx!`)
  }
  return this.playground;
}

/**
 * create canvas without appending it to the Dom
 */
function MakeCanva (id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
}

// getting or setting canvas dimesions
cnv.dims = {
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
cnv.context = function () {
  if(!this.playground){
    throw new Error('wtf');
    // return;
  }
  return cnv.playground.getContext('2d');
}
// canvas events
cnv.event = {

  mousedown: function () {
    cnv.verify.isMouseDown = true;
    // do stuff
  },
  drag: function () {
    if (!cnv.verify.isMousedown){
      // don't do stuff
    }
    // do stuff, like consoling, seems a cool feature
    cnv.verify.isDragging = true
  },
  mouseover: function () {
    // if (cnv.verify.isMousedown){
    //   // do stuff
    // }
    
  }
}

// using elsewhere in the app
ctx = cnv.context;