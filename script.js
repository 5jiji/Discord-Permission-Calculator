const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

let calculated = []
let div

/** @param {Array} data*/
function main(data) {
  div = document.getElementById("input")
  data.forEach(e => {
    calculated.push([e[0], (+(eval(1n << e[1])+[]))])
    document.body.insertBefore(document.createElement("input"), div)
    let _ = document.getElementsByTagName("input")
    let __ = _.length
    while (__) {
      __--
      _[__].setAttribute('type', 'checkbox')
      _[__].setAttribute('class', 'checkbox')
    }
  });
}
main(data)