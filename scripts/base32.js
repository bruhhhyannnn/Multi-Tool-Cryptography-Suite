document.getElementById('encode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = base32Encode(text);
});

document.getElementById('decode-btn').addEventListener('click', function() {
  const base32 = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = base32Decode(base32);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function base32Encode(text) {
  return base32.encode(text);
}

function base32Decode(base32) {
  return base32.decode(base32);
}
