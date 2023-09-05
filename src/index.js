import "./styles.css";
import { createHeader } from "./header";
import createInfo from "./weatherInfo";

const body = document.querySelector("body");
const header = createHeader();
const main = document.createElement('main');
const weatherInfo = await createInfo("kolhapur");
main.appendChild(weatherInfo)
body.append(header, main);
