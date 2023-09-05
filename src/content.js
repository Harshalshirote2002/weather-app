import searchIcon from "./images/magnify.svg";
import createInfo from "./weatherInfo";
import updateDisplay from "./index.js";

const header = document.createElement("header");
const searchBar = document.createElement("div");
const location = document.createElement("input");
const headline = document.createElement("div");
const img = new Image();
location.classList.add("search-location");
searchBar.classList.add("search-bar");
headline.classList.add("head-line");
headline.textContent = "Weather App";
location.placeholder = "delhi";
img.src = searchIcon;
let info = createInfo("delhi");

async function searchBarEvent() {
  try {
    info = await createInfo(location.value);
  } catch (err) {
    console.error(err);
    if (err instanceof TypeError) {
      alert("entered location not found!");
    }
  }
  updateDisplay();
}

export function createContent() {
  img.addEventListener("click", searchBarEvent);
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchBarEvent();
    }
  });
  searchBar.append(location, img);
  header.append(headline, searchBar);
  return [header, info];
}
