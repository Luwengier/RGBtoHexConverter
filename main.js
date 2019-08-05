const sliderRed = document.getElementById("myRangeRed")
const outputRed = document.getElementById("color-panel-red")
const sliderGreen = document.getElementById("myRangeGreen")
const outputGreen = document.getElementById("color-panel-green")
const sliderBlue = document.getElementById("myRangeBlue")
const outputBlue = document.getElementById("color-panel-blue")

const textContent = document.getElementById("color-panel")

let redValue = '00'
let greenValue = '00'
let blueValue = '00'

// Display the default slider value
outputRed.innerHTML = sliderRed.value;
outputGreen.innerHTML = sliderGreen.value;
outputBlue.innerHTML = sliderBlue.value;

// Update the current slider value (each time you drag the slider handle)
sliderRed.oninput = function () {
  outputRed.innerHTML = this.value
  redValue = colorTrans(Number(this.value))
  textContent.innerHTML = '#' + redValue + greenValue + blueValue
  document.querySelector('body').style.backgroundColor = '#' + redValue + greenValue + blueValue
}
sliderGreen.oninput = function () {
  outputGreen.innerHTML = this.value
  greenValue = colorTrans(Number(this.value))
  textContent.innerHTML = '#' + redValue + greenValue + blueValue
  document.querySelector('body').style.backgroundColor = '#' + redValue + greenValue + blueValue
}
sliderBlue.oninput = function () {
  outputBlue.innerHTML = this.value
  blueValue = colorTrans(Number(this.value))
  textContent.innerHTML = '#' + redValue + greenValue + blueValue
  document.querySelector('body').style.backgroundColor = '#' + redValue + greenValue + blueValue
}

//function
function colorTrans(n) {
  let num = Number(n).toString(16)
  if (num.length < 2) {
    num = '0' + num
  }
  return num
}

