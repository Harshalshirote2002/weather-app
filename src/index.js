import "./styles.css";
import { createContent } from "./content.js";
import createFooter from "./commonFooter.js";
import './fontawesome.js';

const body = document.querySelector("body");
const main = document.createElement("main");

export default async function updateDisplay() {
  const content = createContent();
  const footer = createFooter();
  body.textContent = "";
  main.textContent = "";
  const weatherInfo = await content[1];
  main.appendChild(weatherInfo);
  body.append(content[0], main, footer);
}

updateDisplay();
