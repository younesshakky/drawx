/**
 * all the functions that returns random values
 */

// get random number with max value
var getRandom = function (max, min) {
  var rand = Math.floor(Math.random() * max);
  if(min === (null || undefined) ){
    return rand;
  }

  if(rand > min){
    return rand;
  }else {
    rand = Math.floor(Math.random() * max);
  }

  if(arguments.length > 1) {
    return Math.min(arguments[1], Math.floor( Math.random() * max ))
  }
  return Math.floor(Math.random() * max)
}

// geting random position
// 
var getRandPos = function (elm, rel) {
  if (typeof elm === 'undefined') {
    return undefined
  }

  function getLimit() {
    var limX = function () {
      return dimensions.get(rel).width - dimensions.get(elm).width
    }

    var limY = function () {
      return dimensions.get(rel).height - dimensions.get(elm).height
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
// function centerElm(elm, rel) {
//   // position relative for parent is required
//   var isParentRelative = (getComputedStyle(rel).position == 'relative') ? true : false;
//   if (!isParentRelative) {
//     rel.style.position = 'relative';
//   }

//   valueX = dimensions.get(rel).halfX() - dimensions.get(elm).halfX();
//   valueY = dimensions.get(rel).halfY() - dimensions.get(elm).halfY();
//   elm.style.position = 'absolute';
//   elm.style.left = valueX + 'px';
//   elm.style.top = valueY + 'px';

// }

// get random alphabets string
// names randomly picked from :
// https://en.wikipedia.org/wiki/List_of_Intel_codenames
var randName = function () {
  var names = [
    'Agate', 'Jaketown', 'Kirkwood', 'Conroe', 'Dimona', 'Flaxton', 'Fort Sumter', 'Long Cove', 'Menlow', 'Bonetrail', 'Aurora', 'Altair', 'Spring Meadow', 'Stoneville', 'Kyrene', 'Woodridge', 'Zion'
  ]

  return names[ getRandom(names.length) ]
}