async function getUsers() {
  const resp = await fetch("http://localhost:3000/api/v1/users");
  const data = await resp.json();
  let users = User.createUsers(data);
}

async function getAllCommunities() {
  const resp = await fetch("http://localhost:3000/api/v1/communities");
  const data = await resp.json();
  communitiesDOMList = Community.createCommunities(data);
  displayOnDom(communitiesDOMList, "#communitiesList", "Communities");
}

function goToCommunity(id) {
  fetch(`http://localhost:3000/api/v1/communities/${id}`)
    .then((resp) => resp.json())
    .then((data) => communityPosts(data));
}
