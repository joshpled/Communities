const BASE_URL = "http://localhost:3000/api/v1/";

const homeButton = document.querySelector("#homeButton");
const postList = document.querySelector("#postsList");
const communitiesList = document.querySelector("#communitiesList");

document.addEventListener("DOMContentLoaded", () => {
  getAllCommunities()
  document.querySelector("#modal").innerHTML = sample;
});

function displayOnDom(list, idName, title,buttonTitle="",id="") {
  let div = document.createElement('div')
  let buttonDiv = document.createElement('div')
  let listName = document.querySelector(idName);
  let header = document.createElement('h1')
  buttonDiv.setAttribute('id','buttonDiv')
  header.className = "display-4 text-white"
  header.innerText = title
  header.setAttribute('style','float:left;')
  div.className = "container"
  div.setAttribute('id','headerDropDown')
  div.appendChild(header)
  listName.appendChild(div)
  if (idName === '#postsList'){
    buttonDiv.setAttribute('style','margin-bottom: 10px;')
    buttonDiv.appendChild(makePostButton(buttonTitle,id))
    buttonDiv.appendChild(searchInput())
    buttonDiv.appendChild(dropDownMenu(list,idName,title))
    let deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', ()=>{
      if (window.confirm(`Would you like to delete this community?`)){
      deleteCommunity()
      }
    })
    deleteButton.setAttribute('class','btn btn-secondary btn-sm')
    deleteButton.setAttribute('style','margin: 10px 0 0 10px;')
    deleteButton.setAttribute('id',id)
    deleteButton.innerText = "Delete Community"
    buttonDiv.appendChild(deleteButton)
    listName.appendChild(buttonDiv)
  } else{
    buttonDiv.setAttribute('style','margin-bottom: 10px;')
    buttonDiv.appendChild(searchInput())
    buttonDiv.appendChild(dropDownMenu(list,idName,title))
    listName.appendChild(buttonDiv)
  }
  for (let x of list) {
    let li = x.createLiElement();
    listName.appendChild(li);
  }
}

homeButton.addEventListener("click", () => {
  goHome()
});

let goHome = function (){
  postList.setAttribute("style", "display:none;");
  postList.innerHTML = "";
  postsDOMList = []
  communitiesList.removeAttribute("style");
  communitiesList.setAttribute("style", "padding-top: 10px;");
  document.getElementById('sortMenu').remove()
  document.getElementById('buttonDiv').appendChild(dropDownMenu(communitiesDOMList,"#communitiesList", "Communities"))
}