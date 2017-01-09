var result = document.getElementById("result")
var c_temperature;
var f_temperature;

function toCelsius () {
	var temperature = parseFloat(document.getElementById("temperature").value);
	console.log(temperature);
	var c_temperature = temperature-32;
	var c_temperature = c_temperature/1.8;
	var c_temperature = Math.round(c_temperature)
	console.log(c_temperature);
	result.innerHTML = result.innerHTML + c_temperature + " degrees Celsius!";
}

function toFahrenheit () {
	var temperature = parseFloat(document.getElementById("temperature").value);
	console.log(temperature);
	var f_temperature = temperature*1.8;
	var f_temperature = f_temperature+32;
	var f_temperature = Math.round(f_temperature)
	console.log(f_temperature);
	result.innerHTML = result.innerHTML + f_temperature + " degrees Fahrenheit!";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var reload = document.getElementById("clear");

//clear function
function clear () {
	window.location.reload()
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  // console.log("event", clickEvent);
  if (document.getElementById("fahrenheit").checked === true) {
  	toFahrenheit();
  	addColor();
  }
  if (document.getElementById("celsius").checked === true) {
  	toCelsius();
  	addColor();
  }
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

reload.addEventListener("click", clear);

//color decision
function addColor () {
	if (c_temperature>32 || f_temperature>90) {
		result.style.color = red;
	} else if (c_temperature<0 || f_temperature<32) {
		result.style.color = lightblue;
	} else {
		result.style.color = green;
	}

}

