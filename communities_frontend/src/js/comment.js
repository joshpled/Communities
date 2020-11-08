let commentsDOMList = [];

class postComment {
  constructor(obj) {
    this.content = obj.content;
    this.id = obj.id;
    this.created_at = obj.created_at;
    this.post_id = obj.post_id;
  }

  static createComments(arr) {
    return arr.map((x) => new postComment(x));
  }

  createLiElement() {
    let div = document.createElement('div')
    let li = document.createElement("li");
    let small = document.createElement("small");
    small.setAttribute("style", "float: right;");
    small.innerText = this.created_at;
    li.appendChild(small);
    return li;
  }
}
