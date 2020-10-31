class Post{

    constructor(obj){
        this.title = obj.title
        this.content = obj.content
        this.user_id = obj.user_id
    }

    static createPosts(arr) {
        return arr.map((x) => new Post(x));
      }

      createLiElement() {
        let li = document.createElement("li");
        let div = document.createElement('div')
        let h5 = document.createElement('h5')
        let p = document.createElement('p')
        h5.className = "mt-0 mb-1"
        div.className = "media-body bg-light"
        li.className = "media";
        p.innerText = this.content
        h5.innerHTML = this.title
        li.appendChild(div)
        div.appendChild(h5)
        h5.after(p)
        li.setAttribute("data-posts", "postList");
        return li;
      }
}