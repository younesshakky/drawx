// general purpose functions

// is (http/s) set
var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// save image url to localStorage

var saveImg = function (name, url) {
  localStorage.setItem(name, url)
}


// verify if every thing is right and move to canvas editing