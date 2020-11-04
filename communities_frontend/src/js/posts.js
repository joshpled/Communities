let postsDOMList = [];

class Post {
  constructor(obj) {
    debugger
    this.title = obj.title;
    this.content = obj.content;
    this.user_id = obj.user_id;
    this.created_at = obj.created_at;
  }

  static createPosts(arr) {
    return arr.map((x) => new Post(x));
  }

  createLiElement() {
    var li = document.createElement("li");
    var p = document.createElement('p');
    let small = document.createElement('small')
    small.setAttribute('style','float: right;')
    debugger
    small.innerText = this.created_at
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    var title = document.createElement('h5')
    p.innerText = this.content
    title.innerText = this.title
    li.appendChild(title)
    li.appendChild(p)
    li.setAttribute("data-postslist", "postlist");
    li.appendChild(small)
    return li;
  }
  
}