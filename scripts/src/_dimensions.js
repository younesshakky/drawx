// get (2d) dimensions of a certain element
var dimensions = function (item) {
  if (typeof item == 'undefined' || !item) {
    return false;
  }

  function getWidth() {
    return item.innerWidth || item.offsetWidth;
  }

  function getHeight() {
    return item.innerHeight || item.offsetHeight;
  }

  function half() {
    return {
      x: () => {
        return getWidth() / 2
      },
      y: () => {
        return getHeight() / 2
      }

    }
  }

  return {
    height: getHeight(),
    width: getWidth(),
    halfX: half().x,
    halfY: half().y
  }
}