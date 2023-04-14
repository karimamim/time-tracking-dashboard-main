// I have data from data.js

const timeBtns = document.querySelectorAll(".time-btn");

timeBtns.forEach(function (timeBtn) {
	timeBtn.addEventListener("click", function (event) {
		console.log(event.target.dataset.time);
	});
});
