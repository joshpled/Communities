async function getAllCommunities() {
  const resp = await fetch(`${BASE_URL}communities`);
  const data = await resp.json();
  communitiesDOMList = Community.createCommunities(data);
  displayOnDom(communitiesDOMList, "#communitiesList", "Communities");
}

async function goToCommunity(id) {
  const resp = await fetch(`${BASE_URL}communities/${id}/posts`)
  const data = await resp.json()
  postsDOMList = Post.createPosts(data)
  communityPosts(postsDOMList)
}
