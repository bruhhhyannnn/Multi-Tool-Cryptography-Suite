document.getElementById('visualize-btn').addEventListener('click', function() {
  const text = document.getElementById('input-text').value;
  visualizeText(text);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const canvas = document.getElementById('visualization-canvas');
  canvas.toBlob(function(blob) {
    const item = new ClipboardItem({ 'image/png': blob });
    navigator.clipboard.write([item]);
  });
});

function visualizeText(text) {
  const canvas = document.getElementById('visualization-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = '16px Arial';
  ctx.fillText(`Text: ${text}`, 10, 30);

  ctx.fillText(`Length: ${text.length}`, 10, 60);

  const charCodes = text.split('').map(c => c.charCodeAt(0));
  ctx.fillText(`Character Codes: ${charCodes.join(', ')}`, 10, 90);
}
