// Get which metric the user wants to convert FROM
const metricToConvert = prompt(
  "In which metric is the temperature you are converting? \nC - Celsius\nF - Fareheit\nK - Kelvin"
).toUpperCase();

// Check the input is C, F or K and ask the user to refresh if input is not valid.
// This ends the process if the input is not valid
if (
  metricToConvert !== "C" &&
  metricToConvert !== "F" &&
  metricToConvert !== "K"
) {
  alert(
    "Please click the 'OK' button then refresh the page.\nYou must input a valid symbol: C F or K"
  );
} else {
  // Get the amount of the metric to convert
  const numToConvert = Number(
    prompt("Input the temperature you want converted: ")
  );

  // Check that a number was entered
  // got isNaN() from here: https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
  // This ends the process if the input is not a number
  if (isNaN(numToConvert)) {
    alert(
      "Please click the 'OK' button then refresh the page.\nYou must input a valid number."
    );
  } else {
    switch (metricToConvert) {
      // If Celsius is chosen
      case "C":
        // Get which metric the user wants to convert to
        metricConvertTo = prompt(
          "To which metric are you converting the temperature to? \nC - Celsius\nF - Fareheit\nK - Kelvin"
        ).toUpperCase();
        // Calculation and output message for the conversions
        switch (metricConvertTo) {
          // Celsius to Celsius
          case "C":
            alert(`${numToConvert} °C is ${numToConvert} °C.`);
            break;
          // Celsius to Farenheit
          case "F":
            numConverted = numToConvert * (9 / 5) + 32;
            alert(`${numToConvert} °C is ${numConverted} F.`);
            break;
          // Celsius to Kelvin
          case "K":
            numConverted = numToConvert + 273.15;
            alert(`${numToConvert} °C is ${numConverted} K.`);
            break;
          // Message if they did not enter C, F or K
          default:
            alert(
              "Please click the 'OK' button and refresh the page.\nYou must input a valid symbol: C F or K"
            );
            break;
        }
        break;
      // If Farenheit is chosen
      case "F":
        metricConvertTo = prompt(
          "To which metric are you converting the temperature to? \nC - Celsius\nF - Fareheit\nK - Kelvin"
        ).toUpperCase();
        switch (metricConvertTo) {
          // Farenheit to Celsius
          case "C":
            numConverted = ((numToConvert - 32) * 5) / 9;
            alert(`${numToConvert} F is ${numConverted} °C.`);
            break;
          // Farenheit to Farenheit
          case "F":
            alert(`${numToConvert} F is ${numToConvert} F.`);
            break;
          // Farenheit to Kelvin
          case "K":
            numConverted = ((numToConvert - 32) * 5) / 9 + 273.15;
            alert(`${numToConvert} F is ${numConverted} K.`);
            break;
          // Message if they did not enter C, F or K
          default:
            alert(
              "Please click the 'OK' button and refresh the page.\nYou must input a valid symbol: C F or K"
            );
            break;
        }
        break;
      // If Kelvin is chosen
      case "K":
        metricConvertTo = prompt(
          "To which metric are you converting the temperature to? \nC - Celsius\nF - Fareheit\nK - Kelvin"
        ).toUpperCase();
        switch (metricConvertTo) {
          // Kelvin to Celsius
          case "C":
            numConverted = numToConvert - 273.15;
            alert(`${numToConvert} K is ${numConverted} °C.`);
            break;
          // Kelvin to Farenheit
          case "F":
            numConverted = ((numToConvert - 273.15) * 9) / 5 + 32;
            alert(`${numToConvert} K is ${numConverted} F.`);
            break;
          // Kelvin to Kelvin
          case "K":
            alert(`${numToConvert} K is ${numToConvert} K.`);
            break;
          // Message if they did not enter C, F or K
          default:
            alert(
              "Please click the 'OK' button and refresh the page.\nYou must input a valid symbol: C F or K"
            );
            break;
        }
        break;
    }
  }
}
