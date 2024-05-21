document.getElementById('encode-btn').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const resultsContainer = document.getElementById('brute-force-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    document.getElementById('result-text').innerText = caesarCipher(text, shift);
});

document.getElementById('decode-btn').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const resultsContainer = document.getElementById('brute-force-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    document.getElementById('result-text').innerText = caesarCipher(text, -shift);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const resultText = document.getElementById('result-text').innerText;
    navigator.clipboard.writeText(resultText);
});

document.getElementById('brute-force-btn').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const resultsContainer = document.getElementById('brute-force-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    document.getElementById('result-text').innerText = '';

    for (let shift = 1; shift < 26; shift++) {
        const decryptedText = caesarCipher(text, -shift);
        const result = document.createElement('p');
        result.innerText = `Shift ${shift}: ${decryptedText}`;
        resultsContainer.appendChild(result);
    }
});

function caesarCipher(text, shift) {
    return text.replace(/[a-zA-Z]/g, function(c) {
        const code = c.charCodeAt(0);
        const shiftBase = code >= 97 ? 97 : 65;
        return String.fromCharCode(((code - shiftBase + shift) % 26 + 26) % 26 + shiftBase);
    });
}