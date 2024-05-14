document.getElementById('encode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const key = document.getElementById('key').value;
  document.getElementById('result-text').innerText = vigenereCipher(text, key, true);
});

document.getElementById('decode-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  const key = document.getElementById('key').value;
  document.getElementById('result-text').innerText = vigenereCipher(text, key, false);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const resultText = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(resultText);
});

function vigenereCipher(text, key, encode = true) {
  let result = '';
  let keyIndex = 0;
  const shift = encode ? 1 : -1;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const charCode = char.charCodeAt(0);
      const keyChar = key[keyIndex % key.length].toUpperCase();
      const keyShift = (keyChar.charCodeAt(0) - 65) * shift;
      
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(((charCode - 65 + keyShift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(((charCode - 97 + keyShift + 26) % 26) + 97);
      }
      
      keyIndex++;
    }
    result += char;
  }
  return result;
}
