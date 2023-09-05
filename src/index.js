import "./styles.css";
import { createContent } from "./content.js";

const body = document.querySelector("body");
const main = document.createElement("main");

export default async function updateDisplay() {
  const content = createContent();
  body.textContent = "";
  main.textContent = "";
  const weatherInfo = await content[1];
  main.appendChild(weatherInfo);
  body.append(content[0], main);
}

updateDisplay();
