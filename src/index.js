// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

// -------------------------------------------------------?
// import "./styles/style.css";

// // СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// // 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const list = document.querySelector(".js-list");
// const clearBtn = document.querySelector(".clearBtn");

// form.addEventListener("submit", inputValue);

// function inputValue(evt) {
//   evt.preventDefault();
//   let value = input.value;
//   // 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ
//   // З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН
//   const liElement = document.createElement("li");
//   liElement.textContent = value;
//   list.appendChild(liElement);
//   const localeParsed = JSON.parse(localStorage.getItem("liElement")) || [];
//   localeParsed.push(value);
//   updateStorage(localeParsed);
//   input.value = "";
// }

// // 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ
// function updateStorage(liElement) {
//   localStorage.setItem("liElement", JSON.stringify(liElement));
// }

// // 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ,
// //  ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
// function savedValue() {
//   const save = localStorage.getItem("liElement");
//   if (save) {
//     const newParsed = JSON.parse(save);
//     for (const element of newParsed) {
//       const liElement = document.createElement("li");
//       liElement.textContent = element;
//       list.appendChild(liElement);
//     }
//   }
// }
// savedValue();
// 5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ

clearBtn.addEventListener("click", storageClear);
function storageClear() {
  localStorage.removeItem("liElement");
  list.innerHTML = "";
}
// HBS_---------------
import baseUp from "./tamlate/base.hbs";
import { base, list, frameworks } from "./data/hbsData.js";
import listUp from "./tamlate/list.hbs";
import frameUp from "./tamlate/frameworks.hbs";
import libsUp from "./tamlate/libs.hbs";

const markup = baseUp(base);
const markupList = listUp(list);
const frameworksEl = frameUp(frameworks);
const libsmark = libsUp(libs);
const root = document.querySelector("#root");
root.insertAdjacentHTML("beforeend", markup);
root.insertAdjacentHTML("beforeend", markupList);
root.insertAdjacentHTML("beforeend", frameworksEl);
root.insertAdjacentHTML("beforeend", libsmark);
