function convert() {
let inputValue =parseFloat(document.getElementById("inputValue").value) ;
let inputUnit = document.getElementById("inputUnit").value ;
let outputUnit = document.getElementById("outputUnit").value ;
let valueInMeters;
let outputValue;
if (inputUnit === "metros") {
valueInMeters = inputValue;
} else if (inputUnit === "kilometros") {
valueInMeters = inputValue * 1000;
} else if (inputUnit === "millas") {
valueInMeters = inputValue * 1609.34;
} else if (inputUnit === "pies") {
valueInMeters = inputValue * 0.3048;
} else {
}
if (outputUnit === "metros") {
outputValue = valueInMeters;
} else if (outputUnit === "kilometros") {
outputValue = valueInMeters / 1000;
} else if (outputUnit === "millas") {
outputValue = valueInMeters / 1609.34;
} else if (outputUnit === "pies") {
outputValue = valueInMeters / 0.3048;
} else {}
document.getElementById("result").innerText = "El resultado es " + outputValue.toFixed(2) + "" + outputUnit;
}