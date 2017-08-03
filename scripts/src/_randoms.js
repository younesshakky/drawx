/**
 * all the functions that returns random values
 */

// get random number with max value
var getRandom = function (max) {
  return Math.floor(Math.random() * max)
}

// geting random position
var getRandPos = function (elm, rel) {
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
      y: (limY() < 0) ? 0 : limY()
    }

}
  return [getRandom(getLimit().x), getRandom(getLimit().y)]

}
// exeption (LOL) :  read line 2
// to put in _ui-actions
// for elements with unknown dimensions 
function centerElm(elm, rel) {
  // position relative for parent required
  var isParentRelative = (getComputedStyle(rel).position == 'relative') ? true : false;
  if (!isParentRelative) {
    rel.style.position = 'relative';
  }

  valueX = dimensions(rel).halfX() - dimensions(elm).halfX();
  valueY = dimensions(rel).halfY() - dimensions(elm).halfY();
  elm.style.position = 'absolute';
  elm.style.left = valueX + 'px';
  elm.style.top = valueY + 'px';

}