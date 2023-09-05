import searchIcon from "./images/magnify.svg";
import createInfo from "./weatherInfo";
// import weatherIcon from "./images/weather.png";

export function createHeader() {
    createInfo('Raipur');
  const header = document.createElement("header");
  const searchBar = document.createElement("div");
  const location = document.createElement("p");
  location.classList.add("search-location");
  //   const input = document.createElement("input");
  //   input.type = "text";
  //   input.id = "input-location";
  //   input.placeholder = "enter your location here";
  searchBar.classList.add("search-bar");
  const headline = document.createElement("div");
  headline.textContent = "Weather App";
  headline.classList.add("head-line");
  const img = new Image();
  img.src = searchIcon;
  location.textContent = "search";
  //   searchBar.appendChild(input);
  searchBar.append(location, img);
  header.append(headline, searchBar);
  return header;
}
