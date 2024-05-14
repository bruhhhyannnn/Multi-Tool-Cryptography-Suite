<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>AES - EncodeHub</title>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<?php include 'layout/header.php'; ?>
	<main>
		<h2>AES</h2>
		<p>Advanced Encryption Standard (AES) is a symmetric encryption algorithm widely used across the globe.</p>
		<form id="aes-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<label for="key">Key:</label>
			<input type="text" id="key" name="key">
			<button type="button" id="encrypt-btn">Encrypt</button>
			<button type="button" id="decrypt-btn">Decrypt</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<button id="copy-btn">Copy Result</button>
		</div>
	</main>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
	<script src="../scripts/aes.js"></script>
</body>

</html>