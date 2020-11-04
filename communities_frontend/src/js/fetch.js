async function getAllCommunities() {
  const resp = await fetch(`${BASE_URL}communities`);
  const data = await resp.json();
  communitiesDOMList = Community.createCommunities(data);
  displayOnDom(communitiesDOMList, "#communitiesList", "Communities");
}

function goToCommunity(id) {
  fetch(`${BASE_URL}communities/${id}`)
  .then((resp) => resp.json())
  .then((data) => communityPosts(data));
}
