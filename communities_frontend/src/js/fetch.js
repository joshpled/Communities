async function getUsers(){
    const resp = await fetch('http://localhost:3000/api/v1/users');
    const data = await resp.json();
    debugger
    console.log(data);
}

async function getAllCommunities(){
    const resp = await fetch("http://localhost:3000/api/v1/communities")
    const data = await resp.json();
    displayOnDom(Community.createCommunities(data), '#communitiesList') 
}

function goToCommunity(id) {
    fetch(`http://localhost:3000/api/v1/communities/${id}`)
      .then((resp) => resp.json())
      .then((data) => communityPosts(data));
  }


// FUNCTON FOR POST CREATE
// let testerInput = document.querySelector('#submit')
// testerInput.addEventListener('click', function makeCommunity(){
//     event.preventDefault()
//     let input = event.target.parentElement.children.name.value
//     fetch("http://localhost:3000/api/v1/communities", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         nickname: input,
//       })
//     })})