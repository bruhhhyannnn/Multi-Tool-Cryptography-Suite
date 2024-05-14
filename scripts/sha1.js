document.getElementById('hash-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = sha1Hash(text);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function sha1Hash(text) {
  return CryptoJS.SHA1(text).toString();
}
