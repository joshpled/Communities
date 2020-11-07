let postsDOMList = [];

class Post {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.content = obj.content;
    this.created_at = obj.created_at;
    this.community_name = obj.community_name;
    this.community_id = obj.community_id
  }

  static createPosts(arr) {
    return arr.map((x) => new Post(x));
  }

  createLiElement() {
    let community_id = this.community_id
    let id = this.id
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
    li.onclick = function () {
      getCommentsFromPost(community_id,id);
    };
    return li;
  }
  
}

function communityPosts(data) {
  communitiesList.setAttribute('style','display:none')
  postList.removeAttribute('style')
  postList.setAttribute('style','padding-top: 10px;')
  displayOnDom(postsDOMList, '#postsList', `Posts for ${data[0].community_name}`, data[0].community_name, data[0].community_id)
}

function makePost(id) {
  event.preventDefault();
  let title = event.target.parentElement.querySelector('#title').value
  let content = event.target.parentElement.querySelector('#content').value
  fetch(`${BASE_URL}communities/${id}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
      community_id: id,
      user_id: 1
    }),
  })
    .then((resp) => resp.json())
    .then((json) => {
      post = new Post(json)
      postsDOMList.push(post)
      postList.innerHTML = ""
      displayOnDom(postsDOMList, '#postsList', `Posts for ${json.community_name}`, json.community_name, json.community_id)
    })
    .catch((error) => console.log(error));
}

function makePostButton(community,id){
  let button = document.createElement('button')
  button.className = "btn btn-secondary btn-sm"
  button.setAttribute('id','postButton')
  button.setAttribute('style','margin-top: 10px;')
  button.innerText = "Create a New Post"
  button.addEventListener('click', ()=>{
    button.after(makePostForm(community,id))
    button.disabled = true
  })
  return button
}

function makePostForm(community,id){
  let formDiv = document.createElement('div')
  formDiv.setAttribute('style','border-radius: 5px; background-color: #f2f2f2; padding: 10px; margin: 10px 50px 0 50px;')
  let formTitle = document.createElement('h5')
  formTitle.innerText = `Create New Post for ${community}`
  let form = document.createElement('form')
  let divTitle = document.createElement('div')
  divTitle.className = "form-group row"
  let titleInputDiv = document.createElement('div')
  titleInputDiv.className = "col"
  let titleInput = document.createElement('input')
  titleInput.className = "form-control" 
  titleInput.setAttribute('id','title')
  titleInput.type = "text"
  titleInput.placeholder = "Title"
  titleInputDiv.appendChild(titleInput)
  let divContent = document.createElement('div')
  divContent.className = "form-group row"
  let contentInputDiv = document.createElement('div')
  contentInputDiv.className = "col"
  let contentInput = document.createElement('textarea')
  contentInput.className = "form-control"
  contentInput.setAttribute('id','content')
  contentInput.setAttribute('rows','3')
  contentInput.placeholder = `I have this to say about ${community}...`
  let cancelButton = document.createElement('button')
  cancelButton.setAttribute('id','cancelCreateForm')
  cancelButton.setAttribute('style','float: right;')
  cancelButton.className = "btn btn-outline-secondary"
  cancelButton.type = "button"
  cancelButton.innerText = "Cancel"
  cancelButton.addEventListener('click', ()=>{
    let form = event.target.parentElement
    let button = event.target.parentElement.parentElement.querySelector('#postButton')
    button.disabled = false
    form.remove()
  })
  let submitButton = document.createElement('button')
  submitButton.innerText = "Create Post"
  submitButton.className = 'btn btn-info'
  submitButton.setAttribute('id','createPostButton')
  submitButton.addEventListener('click', ()=>{
    makePost(id)
    let form = event.target.parentElement
    let button = event.target.parentElement.parentElement.querySelector('#postButton')
    button.disabled = false
    form.remove()
  })
  titleInputDiv.appendChild(titleInput)
  divTitle.appendChild(titleInputDiv)
  contentInputDiv.appendChild(contentInput)
  divContent.appendChild(contentInputDiv)
  form.appendChild(divTitle)
  form.appendChild(divContent)
  formDiv.appendChild(formTitle)
  formDiv.appendChild(form)
  formDiv.appendChild(submitButton)
  formDiv.appendChild(cancelButton)
  return formDiv
}