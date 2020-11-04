const BASE_URL = "http://localhost:3000/api/v1/";
const homeButton = document.querySelector("#homeButton");
const postList = document.querySelector("#postsList");
const communitiesList = document.querySelector("#communitiesList");

document.addEventListener("DOMContentLoaded", () => {
  getAllCommunities();
  document.querySelector("#modal").innerHTML = sample;
});

function displayOnDom(list, idName, title) {
  let div = document.createElement('div')
  let listName = document.querySelector(idName);
  let header = document.createElement('h1')
  header.className = "display-4 text-white"
  header.innerText = title
  header.setAttribute('style','float:left;')
  div.className = "container"
  div.setAttribute('id','headerDropDown')
  div.appendChild(header)
  div.appendChild(dropDownMenu(list,idName,title))
  listName.appendChild(div)
  for (let x of list) {
    let li = x.createLiElement();
    listName.appendChild(li);
  }
}

homeButton.addEventListener("click", () => {
  postList.setAttribute("style", "display:none;");
  postList.innerHTML = "";
  postsDOMList = []
  communitiesList.removeAttribute("style");
  communitiesList.setAttribute("style", "padding-top: 10px;");
  document.getElementById('headerDropDown').appendChild(dropDownMenu(communitiesDOMList,"#communitiesList", "Communities"))
});