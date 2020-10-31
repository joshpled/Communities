async function getUsers(){
    const response = await fetch('http://localhost:3000/api/v1/users');
    const data = await response.json();
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
// function makeNickname(){
// fetch("http://localhost:3000/api/v1/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     nickname: "Byron",
//   })
// })};