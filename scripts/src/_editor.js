// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var cnv = cnv || {};

/**
 * create canvas without appending it to the Dom
 */
function MakeCanva (id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
}

// canvas dimesions
cnv.dims = {
  height: function () {
    // get the maximum height of window
    var wdMaxHeight = dimensions.get(window).height;
    var height = wdMaxHeight - 200;

    // setting height
    if (arguments.length > 0) {
      height = arguments[0]
    }

    if (height < 0) {
      // Note: it's a bug to fix later
      console.log('huh! ta malk mrid ', height)
      return 0;
    }
    return height
  },

  width: function () {
    // get the maximum width of window
    var wdMaxWidth = dimensions.get(window).width;
    var width = wdMaxWidth - 200;

    // setting height
    if (arguments.length > 0) {
      width = arguments[0]
    }
    if (width < 0) {
      // Note: it's a bug to fix later
      console.log('huh! ta malk mrid ', width)
      return 0
    }
    return width;
  }
}