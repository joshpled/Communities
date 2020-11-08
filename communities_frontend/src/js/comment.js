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


let collapseComments = `<p>
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
</p>
<div class="collapse" id="collapseExample">
<div class="card card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
</div>
</div>`