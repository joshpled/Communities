const BASE_URL = "localhost:3000";
const homeButton = document.querySelector("#homeButton")
const postList = document.querySelector("#postsList");
const communitiesList = document.querySelector("#communitiesList");

document.addEventListener("DOMContentLoaded", () => {
  getAllCommunities();
});

function displayOnDom(arr, idName) {
  let listName = document.querySelector(idName);
  for (let x of arr) {
    let li = x.createLiElement();
    listName.appendChild(li);
  }
}

homeButton.addEventListener('click',  ()=> {
  postList.setAttribute("style", "display:none;");
    postList.innerHTML = "";
    communitiesList.removeAttribute("style");
    communitiesList.setAttribute('style','padding-top: 10px;');
})
