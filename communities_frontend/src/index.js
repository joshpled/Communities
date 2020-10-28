document.addEventListener("DOMContentLoaded", ()=>{

    getUsers()
    getAllCommunities()
    document.querySelector("#modalInsert").innerHTML = modalDemo
})


function getUsers(){
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(data => console.log(data));
}

function getAllCommunities(){
    fetch("http://localhost:3000/api/v1/communities")
    .then(resp => resp.json())
    .then(data =>{
       displayOnDom(Community.createCommunities(data), '#communitiesList')
    })
}

function displayOnDom(arr, idName){
    let listName = document.querySelector(idName)
    for (let x of arr){
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.innerHTML = x.name.toUpperCase()
        listName.appendChild(li)
    }
}