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
    var li = document.createElement("li");
    var p = document.createElement('p');
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    var title = document.createElement('h5')
    p.innerText = this.content
    title.innerText = this.title
    li.appendChild(title)
    li.appendChild(p)
    li.setAttribute("data-postslist", "postlist");
    return li;
  }
  
}