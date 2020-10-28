document.addEventListener("DOMContentLoaded", ()=>{

    getUsers()
})


function getUsers(){
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data));
}