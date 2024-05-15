<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Vigenère Cipher - EncodeHub</title>
	<link rel="stylesheet" href="styles_main.css">
</head>

<body>
	<?php include '../layout/header.php'; ?>
	<main>
		<h2>Vigenère Cipher</h2>
		<p>The Vigenère Cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution.</p>
		<form id="vigenere-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<label for="key">Key:</label>
			<input type="text" id="key" name="key">
			<button type="button" id="encode-btn">Encode</button>
			<button type="button" id="decode-btn">Decode</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<?php include '../layout/copy_button.php'; ?>
		</div>
	</main>
	<script src="../scripts/vigenere.js"></script>
</body>

</html>