
let calculated = []
let div
let number = 0

/** @param {Array} data*/
function main(data) {
  let maindiv = document.getElementsByClassName("main")[0]
  document.getElementById("P-input").appendChild(document.createTextNode(`Permission: ${number}`))
  div = document.createElement("div")
  maindiv.appendChild(div)
  let i = 0
  data.forEach(e => {
    if (i === 5) {
      i = 0
      div = document.createElement("div")
      maindiv.appendChild(div)
    }
    calculated.push([e[0], (+(eval(1n << e[1]) + []))])
    let div2 = document.createElement("div")
    div.appendChild(div2)
    div2.setAttribute("class", "input")
    let p = document.createElement("p")
    div2.appendChild(p)
    p.appendChild(document.createTextNode(e[0]))
    div2.appendChild(document.createElement("input"))
    let _ = document.getElementsByTagName("input")
    _[_.length - 1].setAttribute('type', 'checkbox')
    _[_.length - 1].setAttribute('class', `input_checkbox ${e[0]}`)
    i++
  });
}

function update(text, place) {
  place.childNodes[0].textContent = text
}

document.addEventListener("input", e => {
  let input = e.target
  document.getElementById('P-input').childNodes[0].textContent
  calculated.forEach(e => {
    if (e[0] === input.className.split(" ")[1] && input.checked) {
      number = number + e[1]
      update(`Permission: ${number}`, document.getElementById("P-input"))
    }
    else if (e[0] === input.className.split(" ")[1] && !input.checked) {
      number = number - e[1]
      update(`Permission: ${number}`, document.getElementById("P-input"))
    }
  });
});

document.body.onload = main(data)