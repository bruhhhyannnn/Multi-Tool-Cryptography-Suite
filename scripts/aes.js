document.getElementById('encrypt-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const key = document.getElementById('key').value;
  document.getElementById('result-text').innerText = encryptAES(text, key);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const key = document.getElementById('key').value;
  document.getElementById('result-text').innerText = decryptAES(text, key);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function encryptAES(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString();
}

function decryptAES(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
