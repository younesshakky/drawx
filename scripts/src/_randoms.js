// get random number with max value
var getRandom = function getRandom(max) {
  return Math.floor(Math.random() * max)
}

// geting random position
var randPosition = function (elm, rel) {
  if (typeof elm === 'undefined') {
    throw new Error("some error tho!")
  }

  function getLimit() {
    var limX = function () {
      return dimensions(rel).width - dimensions(elm).width
    }

    var limY = function () {
      return dimensions(rel).height - dimensions(elm).height
    }

    return {
      x: (limX() < 0) ? 0 : limX(),
      y: (limY() < 0) ? 0: limY()
    }

  }
  return [getRandom(getLimit().x), getRandom(getLimit().y)]

}