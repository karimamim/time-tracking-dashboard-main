// I have all data from data.js
let time = "weekly";

const row = document.querySelector(".row");

function displayCards() {
  row.innerHTML = "";

  data.map(function (card) {
    const createdCard = creatingCards(card);
    row.appendChild(createdCard);
  });
}

function creatingCards(cardDetails) {
  const { current, previous } = cardDetails.timeframes[time];

  const col4El = document.createElement("div");
  col4El.className = `col-4 ${cardDetails.title
    .toLowerCase()
    .replace(" ", "-")}`;

  const previewElement = document.createElement("div");
  previewElement.className = "preview";

  const headerElement = document.createElement("div");
  headerElement.className = "header";

  const p = document.createElement("p");
  p.innerText = cardDetails.title;

  const image = document.createElement("img");
  image.setAttribute("src", "../images/icon-ellipsis.svg");

  const h2Element = document.createElement("h2");
  h2Element.innerText = `${current}hrs`;

  const compareHrs = document.createElement("p");
  compareHrs.className = "hours";

  if (time === "daily") {
    compareHrs.innerText = `Last Day-${previous}hrs`;
  }

  if (time === "weekly") {
    compareHrs.innerText = `last Week-${previous}hrs`;
  }

  if (time === "monthly") {
    compareHrs.innerText = `Last Month-${previous}hrs`;
  }

  col4El.appendChild(previewElement);
  previewElement.appendChild(headerElement);
  headerElement.appendChild(p);
  headerElement.appendChild(image);
  previewElement.appendChild(h2Element);
  previewElement.appendChild(compareHrs);

  return col4El;
}

displayCards();

const timeButtons = document.querySelectorAll(".time-btn");

function clearBtns() {
  timeButtons.forEach((btn) => {
    btn.classList.remove("bold");
  });
}

timeButtons.forEach(function (btn) {
  btn.addEventListener("click", (event) => {
    clearBtns();
    btn.classList.add("bold");
    time = event.target.dataset.time;
    displayCards();
  });
});
