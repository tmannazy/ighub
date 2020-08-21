// Alert the User 
let call = alert('Calculation of Celsius to Fahrenheit');

// Prompt for Celsius Value
let value = prompt('Input the Celsius Value');

/**  Fahrenheit calculation from Celsius **/

// Fahrenheit Formulae: ((9/5) * C) + 32
let fahrenheit = ((9 / 5) * value) + 32;

// Output the Fahrenheit Calculation
console.log(`The value of the Celsius in Fahrenheit is ${fahrenheit}F.`);
let data = document.querySelector('.info')
data.textContent = (`The value of the Celsius in Fahrenheit is ${fahrenheit}F.`);