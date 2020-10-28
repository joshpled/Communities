class Community{
    constructor(name){
        this.name = name
    }
}

function getAllCommunities(){
    fetch("http://localhost:3000/api/v1/communities")
    .then(resp => resp.json())
    .then(data =>{ 
       let newArr = createAllCommunities(data)
       displayCommunities(newArr)
    })
}

function createAllCommunities(arr){
    let newArr = arr.map(function(x){
        return x.name
    })
    return newArr
}

function displayCommunities(arr){
    let ul = document.querySelector("#communitiesList")
    for (let x of arr){
        let li = document.createElement("li")
        li.classname = "list-group-item"
        li.innerHTML = x
        ul.appendChild(li)
    }
}