let communitiesDOMList = [];

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
    let small = document.createElement('small')
    small.setAttribute('style','float: right;')
    small.innerText = "10 days ago"
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    li.innerHTML = this.name.toUpperCase();
    li.setAttribute("data-communitylist", "indexList");
    li.onclick = function () {
      goToCommunity(id);
    };
    li.appendChild(small)
    return li;
  }

  static sortByFirstLetter(){
    communitiesDOMList.sort((a, b) => (a.name > b.name) ? 1 : -1)
    communitiesList.innerHTML = ""
    displayOnDom(communitiesDOMList,"#communitiesList", "Communities")
  }
  
  static sortByNewest(){
  
  }
  
  static sortByOldest(){
      
  }
 
}

function communityPosts(data) {
  let posts = data.slice(1);
  communitiesList.setAttribute('style','display:none')
  postList.removeAttribute('style')
  postList.setAttribute('style','padding-top: 10px;')
  displayOnDom(Post.createPosts(posts), '#postsList', `Posts for ${data[0].name}`)
}

// FUNCTON FOR POST CREATE COMMUNITIES

function makeCommunity() {
  event.preventDefault();
  let input = event.target.parentElement.parentElement.querySelector("#name")
    .value;
  fetch("http://localhost:3000/api/v1/communities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: input,
    }),
  })
    .then((resp) => resp.json())
    .then((json) => {
      communitiesDOMList.push(new Community(json))
      communitiesList.innerHTML = ""
      displayOnDom(communitiesDOMList, "#communitiesList", "Communities")
      closeCommunityForm()
    })
    .catch((error) => console.log(error));
}
