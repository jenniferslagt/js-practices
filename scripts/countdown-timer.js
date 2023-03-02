const wintersportDate = "January 22, 2024 00:00:00";

countdown = () => {
	// Get the future date and current date in miliseconds
	const countDate = new Date(wintersportDate).getTime();
	const currentDate = new Date().getTime();
	const timeDifference = countDate - currentDate;

	// Miliseconds to seconds, minutes, hours and days
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Calculate and round numbers
	const amountOfDays = Math.floor(timeDifference / day);

	// % divides the timeDifference number by the number of days and returns the remaining number(s)
	const amountOfHours = Math.floor((timeDifference % day) / hour);
	const amountOfMinutes = Math.floor((timeDifference % hour) / minute);
	const amountOfSeconds = Math.floor((timeDifference % minute) / second);

	document.querySelector('.days-container .number').innerText = amountOfDays;
	document.querySelector('.hours-container .number').innerText = amountOfHours;
	document.querySelector('.minutes-container .number').innerText = amountOfMinutes;
	document.querySelector('.seconds-container .number').innerText = amountOfSeconds;
}

setInterval(countdown, 1000);