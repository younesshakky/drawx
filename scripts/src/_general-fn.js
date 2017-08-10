/**
 * general purpose functions
 */

// is (http/s) set
var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// verify if every thing is right and move to canvas editing
