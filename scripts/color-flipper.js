const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.color-flipper-container .btn');
const colorText = document.querySelector('.color-txt .hex-code');

btn.addEventListener('click', () => {
	let hexColor = '#';
	// Loop 6 times, because a hex code has 6 characters
	for (let i = 0; i < 6; i++) {
		// Don't overwrite hexColor, but add an random extra character for every loop
		hexColor += hex[getRandomNumber()];
	}

	document.querySelector('#color-box').style.backgroundColor = hexColor;
	colorText.innerText = hexColor;
})

getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
}