const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

let calculated = []
let div

/** @param {Array} data*/
function main(data) {
  let maindiv = document.getElementsByClassName("input_div")[0]
  div = document.createElement("div")
  maindiv.appendChild(div)
  let i = 0
  data.forEach(e => {
    if (i === 5) {
      i = 0
      div = document.createElement("div")
      maindiv.appendChild(div)
    }
    calculated.push([e[0], (+(eval(1n << e[1])+[]))])
    div.appendChild(document.createElement("input"))
    let _ = document.getElementsByTagName("input")
    _[_.length - 1].setAttribute('type', 'checkbox')
    _[_.length - 1].setAttribute('class', `input_checkbox ${e[0]}`)
    i++
  });
}

document.body.onload = main(data)