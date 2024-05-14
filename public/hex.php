<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Hexadecimal - EncodeHub</title>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<?php include 'layout/header.php'; ?>
	<main>
		<h2>Hexadecimal</h2>
		<p>Hexadecimal (Base16) encodes binary data into a human-readable hexadecimal format.</p>
		<form id="hex-form">
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
	<script src="../scripts/hex.js"></script>
</body>

</html>