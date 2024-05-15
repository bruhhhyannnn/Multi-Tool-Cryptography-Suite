<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Hexadecimal - EncodeHub</title>
	<link rel="stylesheet" href="styles_main.css">
</head>

<body>
	<?php include '../layout/header.php'; ?>
	<main>
		<h2>RSA Encryption</h2>
		<p>RSA is an asymmetric encryption algorithm widely used in secure data transmission.</p>
		<form id="rsa-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<label for="public-key">Public Key:</label>
			<textarea id="public-key" name="public-key"></textarea>
			<label for="private-key">Private Key:</label>
			<textarea id="private-key" name="private-key"></textarea>
			<button type="button" id="encrypt-btn">Encrypt</button>
			<button type="button" id="decrypt-btn">Decrypt</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<button id="copy-btn">Copy Result</button>
		</div>
	</main>
	<script src="../scripts/rsa.js"></script>
</body>

</html>