var result = document.getElementById("result")
var temperature;


function toCelsius () {
	var temperature = parseFloat(document.getElementById("temperature").value);
	console.log(temperature);
	var temperature = temperature-32;
	var temperature = temperature/1.8;
	var temperature = Math.round(temperature)
	console.log(temperature);
	result.innerHTML = result.innerHTML + temperature + " degrees celsius!";
}

function toFahrenheit () {
	var temperature = parseFloat(document.getElementById("temperature").value);
	console.log(temperature);
	var temperature = temperature*1.8;
	var temperature = temperature+32;
	console.log(temperature);
	result.innerHTML = result.innerHTML + "fahrenheit";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  // console.log("event", clickEvent);
  if (document.getElementById("fahrenheit").checked === true) {
  	toFahrenheit()
  }
  if (document.getElementById("celsius").checked === true) {
  	toCelsius()
  }
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);



