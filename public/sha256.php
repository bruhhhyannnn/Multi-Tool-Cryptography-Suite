<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SHA-256 - EncodeHub</title>
	<link rel="stylesheet" href="styles_main.css">
</head>

<body>
	<?php include '../layout/header.php'; ?>
	<main>
		<h2>SHA-256</h2>
		<p>SHA-256 is a member of the SHA-2 cryptographic hash functions designed by the NSA.</p>
		<form id="sha256-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<button type="button" id="hash-btn">Hash</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<?php include '../layout/copy_button.php'; ?>
		</div>
	</main>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
	<script src="../scripts/sha256.js"></script>
</body>

</html>