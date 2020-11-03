async function getUsers(){
    const resp = await fetch('http://localhost:3000/api/v1/users');
    const data = await resp.json();
    let users = User.createUsers(data)
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

function makeCommunity(){
    event.preventDefault()
    let input = event.target.parentElement.parentElement.querySelector('#name').value
    fetch("http://localhost:3000/api/v1/communities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: input,
      })
    }).then((resp) => resp.json()).then((json) => console.log(json))}