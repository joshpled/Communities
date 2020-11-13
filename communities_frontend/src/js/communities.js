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
    let name = this.name
    let li = document.createElement("li");
    let small = document.createElement('small')
    small.setAttribute('style','float: right;')
    small.innerText = this.created_at
    li.className = "list-group-item list-group-item-action";
    li.innerHTML = this.name.toUpperCase();
    li.setAttribute("data-communitylist", "indexList");
    li.setAttribute("communityId", this.id)
    li.onclick = function () {
      goToCommunity(id,name);
    };
    li.appendChild(small)
    return li;
  }

}

//  FUNCTIONS FOR MODAL

function openCommunityForm() {
  document.body.classList.add("showCommunityForm");
  let createCommmInput = document.getElementById('communityName');
  createCommmInput.addEventListener('keyup', ()=>{
    if (event.keyCode === 13){
      event.preventDefault();
      document.getElementById('createCommunity').click();
    }
  })
}
function closeCommunityForm() {
  document.body.classList.remove("showCommunityForm");
}

// FUNCTON FOR CREATE COMMUNITIES

function makeCommunity() {
  event.preventDefault();
  let input = event.target.parentElement.parentElement.querySelector("#communityName")
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

function deleteCommunity() {
  let id = event.target.id
  event.preventDefault();
  fetch(`${BASE_URL}communities/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(() => {
      document.querySelector(`[communityid="${id}"]`).setAttribute('style','display:none')
      goHome()
    })
    .catch((error) => console.log(error));
}


// MODAL CODE 

let createCommunityModal = `
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
      <input type="text" id="communityName">
    </div>
    <div class="element">
      <button id="createCommunity" onclick="makeCommunity()">Create!</button>
    </div>
  </div>
</div>`