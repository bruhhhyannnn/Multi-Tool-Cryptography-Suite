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
		<h2>Base32 Encoding</h2>
		<p>Base32 is a base 32 transfer encoding using the twenty-six letters A–Z and six digits 2–7.</p>
		<form id="base32-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<button type="button" id="encode-btn">Encode</button>
			<button type="button" id="decode-btn">Decode</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<button id="copy-btn">Copy Result</button>
		</div>
	</main>
	<script src="../scripts/base32.js"></script>
</body>

</html>