document.addEventListener("DOMContentLoaded", ()=>{
    getUsers()
    getAllCommunities()
    document.querySelector("#modalInsert").innerHTML = modalDemo
})

function displayOnDom(arr, idName){
    let listName = document.querySelector(idName)
    for (let x of arr){
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.innerHTML = x.name.toUpperCase()
        listName.appendChild(li)
    }
}

