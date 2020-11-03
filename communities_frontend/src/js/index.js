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
  let listName = document.querySelector(idName);
  let headerDiv = document.createElement('div')
  let header = document.createElement('h1')
  header.className = "display-4 text-white float-left"
  header.innerText = title
  headerDiv.appendChild(header)
  listName.appendChild(headerDiv)
  headerDiv.appendChild(dropDownMenu())
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
  let mainDiv = document.createElement('div')
  mainDiv.style = "float:right;"
  mainDiv.className = "dropdown mr-1"
  let button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn btn-secondary dropdown-toggle'
  button.idName = "dropdownMenuOffset"
  button.setAttribute('data-toggle','dropdown')
  button.setAttribute('aria-haspopup','true')
  button.setAttribute('aria-expanded','false')
  button.setAttribute('data-offset','10,20')
  button.innerText = "Sort"
  mainDiv.appendChild(button)
  let menuDiv = document.createElement('div')
  menuDiv.className = "dropdown-menu"
  menuDiv.setAttribute('aria-labelledby','dropdownMenuOffset')
  let sortByFirstLetter = document.createElement('a')
  let sortByNewest = document.createElement('a')
  let sortByOldest = document.createElement('a')
  sortByFirstLetter.innerText = "Sort Alphabetically"
  sortByNewest.innerText = "Sort by Newest"
  sortByOldest.innerText = "Sort by Oldest"
  sortByFirstLetter.className = "dropdown-item"
  sortByNewest.className = "dropdown-item"
  sortByOldest.className = "dropdown-item"
  sortByFirstLetter.onclick = "Community.sortByFirstLetter()"
  sortByNewest.onclick = "Community.sortByFirstLetter()"
  sortByOldest.onclick = "Community.sortByFirstLetter()"
  menuDiv.appendChild(sortByFirstLetter)
  menuDiv.appendChild(sortByNewest)
  menuDiv.appendChild(sortByOldest)
  mainDiv.appendChild(menuDiv)
  return mainDiv
}