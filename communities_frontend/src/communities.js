class Community{
    constructor(name){
        this.name = name
    }
}

BASE_URL = "http://localhost:3000"

function getAllCommunities(){
    fetch(`${BASE_URL}/api/v1/communities`)
  .then(response => response.json())
  .then(data => console.log(data));
}