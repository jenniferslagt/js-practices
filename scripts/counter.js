// Set initial count
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		// Count the number
		if (btn.classList.contains('decrease')) {
			count--;
		} else if (btn.classList.contains('increase')) {
			count++;
		} else {
			count = 0;
		}

		// Change the color
		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else if (count === 0) {
			value.style.color = 'black';
		}
		value.innerText = count;
	})
})