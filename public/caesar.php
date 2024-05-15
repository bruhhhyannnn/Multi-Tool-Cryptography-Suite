<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Caesar Cipher - EncodeHub</title>
	<link rel="stylesheet" href="styles_main.css">
</head>

<body>
	<?php include '../layout/header.php'; ?>
	<main>
		<h2>Caesar Cipher</h2>
		<p>The Caesar Cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet.</p>
		<form id="caesar-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<label for="shift">Shift:</label>
			<input type="number" id="shift" name="shift">
			<button type="button" id="encode-btn">Encode</button>
			<button type="button" id="decode-btn">Decode</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<button id="copy-btn">Copy Result</button>
		</div>
	</main>
	<script src="../scripts/caesar.js"></script>
</body>

</html>