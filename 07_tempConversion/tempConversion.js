const convertToCelsius = function(fr) {
  let cel = (fr - 32) * 5/9;
  let rounded = Math.round(cel * 10)/10;
  return rounded;
};

// console.log(convertToCelsius(100))

const convertToFahrenheit = function(cel) {
  let fr = (cel * 9/5) + 32;
  let rounded = Math.round(fr * 10)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
