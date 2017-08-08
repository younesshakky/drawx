(function () {

  function isNull(e) {
    return (e === ('' || null) ? true : false)
  }

  var dimensions = {}

  var getWidth = function (element) {
    if (isNull(element)) {
      return;
    }
    var width = element.innerWidth || element.offsetWidth;
    if (isNaN(width)) {
      return;
    }
    return width
  }
  var getHeight = function (element) {
    if (isNull(element)) {
      return;
    }
    var height = element.innerHeight || element.offsetHeight;
    if (isNaN(height)) {
      return;
    }

    return height;
  }

  var getHalf = function () {
    var axis = arguments[1];
    var el = arguments[0];

    if (axis === 'x-axis') {
      return getWidth(el) / 2;
    }
    if (axis === 'y-axis') {
      return getHeight(el) / 2;
    }
    return false;
  }



  dimensions = {
    get: function (element) {
      if (isNull(element)) {
        return null;
      }
      return {
        el: element,
        width: getWidth(element),
        height: getHeight(element),
        half: function (axis) {
          return parseInt(getHalf(this.el, axis))
        }
      }
    },
    set: function (element) {
      if (isNull(element)) {
        return null;
      }
      return {
        width: setWidth,
        height: setHeight
      }
    }
  }

  window.dimensions = dimensions

})();

// var test = dimension.get('slab').height;