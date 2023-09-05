import searchIcon from "./images/magnify.svg";

export function createHeader() {
  const header = document.createElement("header");
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-bar");
  const img = new Image();
  img.src = searchIcon;
  searchBar.textContent = "search";
  searchBar.appendChild(img);

  header.appendChild(searchBar);
  return header;
}
