document.getElementById('convert-btn').addEventListener('click', function() {
  const number = document.getElementById('input-number').value;
  const conversionType = document.getElementById('conversion-type').value;
  document.getElementById('result-text').innerText = convertNumber(number, conversionType);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function convertNumber(number, conversionType) {
  switch (conversionType) {
    case 'binary':
      return decToBin(number);
    case 'decimal':
      return binToDec(number);
    case 'hexadecimal':
      return decToHex(number);
    default:
      return 'Invalid conversion type';
  }
}

function decToBin(number) {
  return parseInt(number, 10).toString(2);
}

function binToDec(number) {
  return parseInt(number, 2).toString(10);
}

function decToHex(number) {
  return parseInt(number, 10).toString(16).toUpperCase();
}
