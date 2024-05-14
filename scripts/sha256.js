document.getElementById('hash-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const hash = CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  document.getElementById('result-text').innerText = hash;
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});
