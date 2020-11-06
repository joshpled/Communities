let communitiesDOMList = [];

class Community {

  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.created_at = obj.created_at;
  }

  static createCommunities(arr) {
    return arr.map((x) => new Community(x));
  }

  createLiElement() {
    let id = this.id;
    let li = document.createElement("li");
    let small = document.createElement('small')
    small.setAttribute('style','float: right;')
    small.innerText = this.created_at
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

}

//  FUNCTIONS FOR MODAL

function openCommunityForm() {
  document.body.classList.add("showCommunityForm");
}
function closeCommunityForm() {
  document.body.classList.remove("showCommunityForm");
}

// FUNCTON FOR CREATE COMMUNITIES

function makeCommunity() {
  event.preventDefault();
  let input = event.target.parentElement.parentElement.querySelector("#name")
    .value;
  fetch(`${BASE_URL}communities`, {
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

// MODAL CODE

let sample = `
<div class="popup-overlay"></div>
<div class="popup">
  <div class="popup-close" onclick="closeCommunityForm()">&times;</div>
  <div class="form">
    <div class="avatar">
      <img src="./src/img/COMMUNITY.png" alt="">
    </div>
    <div class="header">
      Create New Community
    </div>
    <div class="element">
      <label for="name">Community Name:</label>
      <input type="text" id="name">
    </div>
    <div class="element">
      <button id="createCommunity" onclick="makeCommunity()">Create!</button>
    </div>
  </div>
</div>`