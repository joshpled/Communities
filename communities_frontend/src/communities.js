class Community{
    constructor(name){
        this.name = name
    }
}

BASE_URL = "http://localhost:3000"

let communitiesArr = []

function getAllCommunities(){
    fetch(`${BASE_URL}/api/v1/communities`)
  .then(response => response.json())
  .then(data => createCommunities(data))
  .then(arr => createCommunityList(arr))
  .catch((error) => {
    console.error('Error:', error);
  });
}

function createCommunities(data){
    for (let x of data){
        communitiesArr.push(new Community(x.name))
    }
    return communitiesArr
}

function createCommunityList(arr){
    let ul = document.createElement("ul")
    let list = document.querySelector("#communitiesList")
    ul.className = "list-group"
    for (let x of arr){
        let li = document.createElement("li")
        li.classname = "list-group-item"
        li.innerHTML = x.name
        ul.appendChild(li)
    }
    list.appendChild(ul)
}