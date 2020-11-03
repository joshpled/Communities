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
  let header = document.createElement('h1')
  header.className = "display-4 text-white"
  header.innerText = title
  listName.appendChild(header)
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
