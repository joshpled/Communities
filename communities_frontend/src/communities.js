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

function goToCommunity(id) {
  fetch(`http://localhost:3000/api/v1/communities/${id}`)
    .then((resp) => resp.json())
    .then((data) => communityPosts(data));
}

function communityPosts(data) {
  let posts = data.slice(1);
  for (x of document.querySelectorAll('li[data-communitylist="indexList"]')){
      x.setAttribute('style','display:none')
  }
  displayOnDom(posts, '#communitiesList')
}
