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