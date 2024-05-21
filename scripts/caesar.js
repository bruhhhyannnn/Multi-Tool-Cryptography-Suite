document.getElementById('encode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const shift = parseInt(document.getElementById('shift').value);
  document.getElementById('result-text').innerText = caesarCipher(text, shift);
});

document.getElementById('decode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const shift = parseInt(document.getElementById('shift').value);
  document.getElementById('result-text').innerText = caesarCipher(text, -shift);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function caesarCipher(text, shift) {
return text.replace(/[a-zA-Z]/g, function(c) {  // callback function 
    const code = c.charCodeAt(0);               // returns Unicode value
    const shiftBase = code >= 97 ? 97 : 65;     // Ternary operator
    return String.fromCharCode(((code - shiftBase + shift) % 26 + 26) % 26 + shiftBase); 
  });
}
