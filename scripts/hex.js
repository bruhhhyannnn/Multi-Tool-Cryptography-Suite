document.getElementById('encode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = textToHex(text);
});

document.getElementById('decode-btn').addEventListener('click', function() {
  const hex = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = hexToText(hex);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function textToHex(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += text.charCodeAt(i).toString(16).padStart(2, '0');
  }
  return result;
}

function hexToText(hex) {
  let result = '';
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return result;
}
