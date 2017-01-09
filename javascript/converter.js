var temperature = document.getElementById("temperature")
console.log(temperature)

function toCelsius () {
	var temperature = (temperature-32)/1.8
}

function toFahrenheit () {
	var temperature = 1.8*temperature+32
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);