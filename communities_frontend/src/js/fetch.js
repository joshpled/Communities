async function getAllCommunities() {
  const resp = await fetch(`${BASE_URL}communities`);
  const data = await resp.json();
  communitiesDOMList = Community.createCommunities(data);
  displayOnDom(communitiesDOMList, "#communitiesList", "Communities");
}

async function goToCommunity(id, name) {
  const resp = await fetch(`${BASE_URL}communities/${id}/posts`);
  if (resp.ok === false) {
    communitiesList.setAttribute("style", "display:none");
    postList.removeAttribute("style");
    postList.setAttribute("style", "padding-top: 10px;");
    displayOnDom(postsDOMList, "#postsList", `Posts for ${name}`, name, id);
  } else {
    const data = await resp.json();
    postsDOMList = Post.createPosts(data);
    communityPosts(postsDOMList);
  }
}

async function getCommentsFromPost(commId,postId){
  const resp = await fetch(`${BASE_URL}communities/${commId}/posts/${postId}/comments`)
  if (resp.ok === false){
    console.log('No Comments')
  } else {
    const data = await resp.json();
    commentsDOMList = postComment.createComments(data)
  }
}