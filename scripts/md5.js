document.getElementById('hash-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = md5Hash(text);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function md5Hash(text) {
  return CryptoJS.MD5(text).toString();
}
