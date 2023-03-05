// Local reviews data
// So this is an array of objects. Each object represents a reviewer.
const reviews = [
	{
		id: 1,
		name: 'Álvaro Morte',
		job: 'Project Manager',
		img: 'https://caknowledge.com/wp-content/uploads/2022/07/Alvaro-Morte-Biography.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 2,
		name: 'Úrsula Corberó',
		job: 'Visual Designer',
		img: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/11/20/15427301674199.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 3,
		name: 'Miguel Herrán',
		job: 'Full Stack Developer',
		img: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQzrJXIyDsPG7gvNBlZoabjcKeMD8FmssbFMUnvD9sPGm6Z_pOzUhgcqzD3FJRuFAfS_LUV664ifloxSII',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 4,
		name: 'Alba Flores',
		job: 'UX Designer',
		img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alba-flores-1669723168.jpg?crop=1.00xw:0.501xh;0,0.0328xh&resize=1200:*',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
];

const img = document.querySelector('.reviewer-img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const description = document.querySelector('.description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set to the initial reviewer of the array
let currentReviewer = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', () => {
	showReviewer(currentReviewer);
})

// Show reviewer based on item
showReviewer = () => {
	const item = reviews[currentReviewer];
	img.src = item.img;
	author.innerText = item.name;
	job.innerText = item.job;
	job.description = item.description;
}

// Show next reviewer
nextBtn.addEventListener('click', () => {
	currentReviewer++;
	if (currentReviewer > reviews.length - 1) {
		currentReviewer = 0;
	}
	showReviewer();
});

// Show previous reviewer
prevBtn.addEventListener('click', () => {
	currentReviewer--;
	if (currentReviewer < 0) {
		currentReviewer = reviews.length - 1;
	}
	showReviewer();
});

// Show random reviewer
randomBtn.addEventListener('click', () => {
	currentReviewer = Math.floor(Math.random() * reviews.length);
	showReviewer();
});