const dailyData = JSON.parse(JSON.stringify(data));
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

// function dailyActivity() {
//   card1.innerHTML = ``;
// }

// dailyActivity();

// const card = {
//   title: "Work",
//   timeframes: {
//     daily: {
//       current: 5,
//       previous: 7,
//     },
//     weekly: {
//       current: 32,
//       previous: 36,
//     },
//     monthly: {
//       current: 103,
//       previous: 128,
//     },
//   },
// };

// const images = {
//   work: "icon-work.svg",
//   play: "icon-play.svg",
//   work: "icon-work.svg",
// };

// function Card(card, images) {
//   return `
//         <div style="background-image: url(../images/icon-work.svg)" class="col-4 ${card.title.toLowerCase()}">
//             <div class="preview">
//               <div class="header">
//                 <p>${card.title}</p>
//                 <img src="./images/icon-ellipsis.svg" alt="" />
//               </div>
//               <h2>10hrs</h2>
//               <p class="hours">Last week-8hrs</p>
//             </div>
//           </div>
//         `;
// }
