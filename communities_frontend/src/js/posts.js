let postsDOMList = [];

class Post {
  constructor(obj) {
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

function makePost() {
  
  event.preventDefault();
  // let input = event.target.parentElement.parentElement.querySelector("#name")
  //   .value;
  // fetch(`${BASE_URL}communities`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: input,
  //   }),
  // })
  //   .then((resp) => resp.json())
  //   .then((json) => {
  //     communitiesDOMList.push(new Community(json[0]))
  //     communitiesList.innerHTML = ""
  //     displayOnDom(communitiesDOMList, "#communitiesList", "Communities")
  //     closeCommunityForm()
  //   })
  //   .catch((error) => console.log(error));
}