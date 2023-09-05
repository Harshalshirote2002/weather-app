import "./styles.css";
import { createHeader } from "./header";

const body = document.querySelector("body");
const header = createHeader();
const main = document.createElement('main');
body.append(header, main);
