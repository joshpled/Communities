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
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('type','button')
    deleteButton.setAttribute('class','btn btn-outline-primary')
    deleteButton.innerHTML = deleteButtonHTML
    deleteButton.setAttribute('style','float:right;')
    deleteButton.addEventListener('click', ()=>{
      if (window.confirm(`Would you like to delete Post: "${this.title}"`)){
        deletePost(this.id, this.community_id)
      }
    })
    li.appendChild(deleteButton)
    li.appendChild(title)
    li.appendChild(p)
    li.setAttribute("data-postslist", "postlist");
    li.setAttribute('postid',`${this.id}`)
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
  formDiv.setAttribute("data-transition","fadeIn")
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

function deletePost(id,community_id) {
  event.preventDefault();
  fetch(`${BASE_URL}communities/${community_id}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(() => {
      document.querySelector(`[postid="${id}"]`).setAttribute('style','display:none')
    })
    .catch((error) => console.log(error));
}

let deleteButtonHTML = `
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>`