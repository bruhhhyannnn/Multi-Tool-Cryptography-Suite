document.getElementById('encrypt-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const publicKey = document.getElementById('public-key').value;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(text);
  document.getElementById('result-text').innerText = encrypted;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
  const encryptedText = document.getElementById('input-text').value;
  const privateKey = document.getElementById('private-key').value;
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  const decrypted = decrypt.decrypt(encryptedText);
  document.getElementById('result-text').innerText = decrypted;
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});
