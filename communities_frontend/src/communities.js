class Community {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
  }

  static createCommunities(arr) {
    return arr.map((x) => new Community(x));
  }

  createLiElement() {
    let id = this.id;
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = this.name.toUpperCase();
    li.setAttribute("data-communitylist", "indexList");
    li.onclick = function () {
      goToCommunity(id);
    };
    return li;
  }
}

function communityPosts(data) {
  let posts = data.slice(1);
  document.querySelector('#communitiesList').setAttribute('style','display:none')
  document.querySelector('#postsList').removeAttribute('style')
  displayOnDom(Post.createPosts(posts), '#postsList')
}
