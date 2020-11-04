let postsDOMList = [];

class Post {
  constructor(obj) {
    this.title = obj.title;
    this.content = obj.content;
    this.user_id = obj.user_id;
  }

  static createPosts(arr) {
    return arr.map((x) => new Post(x));
  }

  createLiElement() {
    let li = document.createElement("li");
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    li.innerHTML = this.title
    li.setAttribute("data-postslist", "postlist");
    return li;
  }
  
}