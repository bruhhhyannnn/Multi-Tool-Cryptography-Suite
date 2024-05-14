document.getElementById('encode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = btoa(text);
});

document.getElementById('decode-btn').addEventListener('click', function() {
  const base64 = document.getElementById('input-text').value;
  document.getElementById('result-text').innerText = atob(base64);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});
