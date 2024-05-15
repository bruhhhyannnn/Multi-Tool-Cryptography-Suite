<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Base64 - EncodeHub</title>
	<link rel="stylesheet" href="styles_main.css">
</head>

<body>
	<?php include '../layout/header.php'; ?>
	<main>
		<h2>Base64</h2>
		<p>Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format.</p>
		<form id="base64-form">
			<label for="input-text">Text:</label>
			<textarea id="input-text" name="input-text"></textarea>
			<button type="button" id="encode-btn">Encode</button>
			<button type="button" id="decode-btn">Decode</button>
		</form>
		<div id="result">
			<h3>Result:</h3>
			<p id="result-text"></p>
			<?php include '../layout/copy_button.php'; ?>
		</div>
	</main>
	<script src="../scripts/base64.js"></script>
</body>

</html>