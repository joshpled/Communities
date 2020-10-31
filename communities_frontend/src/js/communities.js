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
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    li.innerHTML = this.name.toUpperCase();
    li.setAttribute("data-communitylist", "indexList");
    // let badge = document.createElement('span')
    // badge.className = "badge badge-primary badge-pill"
    // badge.innerHTML = "2"
    // badge.setAttribute('style','float:right')
    // li.appendChild(badge)
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
