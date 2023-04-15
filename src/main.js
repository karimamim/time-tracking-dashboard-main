// I have data from data.js
let time = "weekly";

const cardRow = document.querySelector(".row");

function renderCards() {
	cardRow.innerHTML = "";

	data.map(function (card) {
		const cardComponent = createCardComponent(card);
		cardRow.appendChild(cardComponent);
	});
}

function createCardComponent(card) {
	const { current, previous } = card.timeframes[time];

	const colEl = document.createElement("div");
	colEl.className = `col-4 ${card.title.toLowerCase().replace(" ", "-")}`;

	const previewEl = document.createElement("div");
	previewEl.className = "preview";

	const headerEl = document.createElement("div");
	headerEl.className = "header";

	const title = document.createElement("p");
	title.innerText = card.title;

	const ellipsis = document.createElement("img");
	ellipsis.setAttribute("src", "../images/icon-ellipsis.svg");

	const hrsEl = document.createElement("h2");
	hrsEl.innerText = `${current}hrs`;

	const compareHrsEl = document.createElement("p");
	compareHrsEl.className = "hours";
	if (time === "daily") compareHrsEl.innerText = `Last  day-${previous}hrs`;
	if (time === "weekly") compareHrsEl.innerText = `Last  week-${previous}hrs`;
	if (time === "monthly") compareHrsEl.innerText = `Last  month-${previous}hrs`;

	// append child elements to order
	colEl.appendChild(previewEl);
	previewEl.appendChild(headerEl);
	headerEl.appendChild(title);
	headerEl.appendChild(ellipsis);
	previewEl.appendChild(hrsEl);
	previewEl.appendChild(compareHrsEl);
	return colEl;
}

// Initially render cards
renderCards();

// Add event handlers to buttons
const timeBtns = document.querySelectorAll(".time-btn");

timeBtns.forEach(function (timeBtn) {
	timeBtn.addEventListener("click", function (event) {
		time = event.target.dataset.time;
		renderCards();
	});
});
