document.addEventListener("DOMContentLoaded", ()=>{
    getUsers()
    getAllCommunities()
    // document.querySelector("#modalInsert").innerHTML = modalDemo
    // document.querySelector("#createUsername").onclick = makeNickname()
})

function displayOnDom(arr, idName){
    let listName = document.querySelector(idName)
    for (let x of arr){
        let li = x.createLiElement()
        listName.appendChild(li)
    }
}

