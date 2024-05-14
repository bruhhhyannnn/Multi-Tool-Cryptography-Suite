<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Base64 - EncodeHub</title>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<?php include 'layout/header.php'; ?>
	<main>
		<h2>SHA-1 Hashing</h2>
		<p>SHA-1 is a widely used cryptographic hash function.</p>
		<form id="sha1-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<button type="button" id="hash-btn">Hash</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<button id="copy-btn">Copy Result</button>
		</div>
	</main>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
	<script src="../scripts/sha1.js"></script>
</body>

</html>