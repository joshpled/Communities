const BASE_URL = "localhost:3000";
const homeButton = document.querySelector("#homeButton");
const postList = document.querySelector("#postsList");
const communitiesList = document.querySelector("#communitiesList");

document.addEventListener("DOMContentLoaded", () => {
  getAllCommunities();
  getUsers();
  document.querySelector("#modal").innerHTML = sample;
});

function displayOnDom(arr, idName, title) {
  let div = document.createElement('div')
  let listName = document.querySelector(idName);
  let header = document.createElement('h1')
  header.className = "display-4 text-white"
  header.innerText = title
  header.setAttribute('style','float:left;')
  div.className = "container"
  div.appendChild(header)
  div.appendChild(dropDownMenu())
  listName.appendChild(div)
  for (let x of arr) {
    let li = x.createLiElement();
    listName.appendChild(li);
  }
}

homeButton.addEventListener("click", () => {
  postList.setAttribute("style", "display:none;");
  postList.innerHTML = "";
  communitiesList.removeAttribute("style");
  communitiesList.setAttribute("style", "padding-top: 10px;");
});

function openCommunityForm() {
  document.body.classList.add("showCommunityForm");
}
function closeCommunityForm() {
  document.body.classList.remove("showCommunityForm");
}

function dropDownMenu(){
  let span = document.createElement('span')
  span.className = "align-items-end"
  let button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn btn-secondary dropdown-toggle'
  button.idName = "dropdownMenu1"
  button.setAttribute('data-toggle','dropdown')
  button.setAttribute('aria-haspopup','true')
  button.setAttribute('aria-expanded','false')
  button.innerText = "Sort"
  button.style = "float: right;"
  let menu = document.createElement('div')
  menu.className = "dropdown-menu"
  menu.setAttribute('aria-labelledby','dropdownMenu1')
  let sortByFirstLetter = document.createElement('a')
  let sortByNewest = document.createElement('a')
  let sortByOldest = document.createElement('a')
  sortByFirstLetter.innerText = "Sort Alphabetically"
  sortByNewest.innerText = "Sort by Newest"
  sortByOldest.innerText = "Sort by Oldest"
  sortByFirstLetter.setAttribute('onclick','Community.sortByFirstLetter()')
  sortByNewest.setAttribute('onclick','Community.sortByFirstLetter()')
  sortByOldest.setAttribute('onclick','Community.sortByFirstLetter()')
  sortByFirstLetter.className = "dropdown-item"
  sortByNewest.className = "dropdown-item"
  sortByOldest.className = "dropdown-item"
  sortByFirstLetter.style = "cursor: pointer;"
  sortByNewest.style = "cursor: pointer"
  sortByOldest.style = "cursor: pointer"
  menu.appendChild(sortByFirstLetter)
  span.appendChild(button)
  span.appendChild(menu)
  return span
}