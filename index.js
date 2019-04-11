'use strict'

module.exports = function randomColor (sentence, callback) {
  return new Promise((resolve, reject) => {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
    return callback(color)
  })
}
