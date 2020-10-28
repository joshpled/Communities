class Community{
    constructor(name){
        this.name = name
    }
}

function getAllCommunities(){
    fetch("http://localhost:3000/api/v1/communities")
    .then(resp => resp.json())
    .then(data => createAllCommunities(data))
}

function createAllCommunities(arr){
    return arr.map(function(x){
        return x.name
    })
}


