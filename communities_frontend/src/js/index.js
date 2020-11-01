document.addEventListener("DOMContentLoaded", () => {
  // fetch('http://localhost:3000', {credentials: 'include'})

  document.querySelector("#homeButton").onclick = function () {
    document.querySelector("#postsList").setAttribute("style", "display:none");
    document.querySelector("#postsList").innerHTML = "";
    document.querySelector("#communitiesList").removeAttribute("style");
  };
  getAllCommunities();
  // document.querySelector("#modalInsert").innerHTML = modalDemo
  // document.querySelector("#createUsername").onclick = makeNickname()
});

function displayOnDom(arr, idName) {
  let listName = document.querySelector(idName);
  for (let x of arr) {
    let li = x.createLiElement();
    listName.appendChild(li);
  }
}

function navBar(button) {
  document.querySelector("#homeButton").onclick = function () {
    document.querySelector("#postsList").setAttribute("style", "display:none");
    document.querySelector("#postsList").innerHTML = "";
    document.querySelector("#communitiesList").removeAttribute("style");
  };
}

function getCSRFToken() {
  return unescape(document.cookie.split('=')[1])
}