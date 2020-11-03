class Post {
  constructor(obj) {
    this.title = obj.title;
    this.content = obj.content;
    this.user_id = obj.user_id;
  }

  static createPosts(arr) {
    return arr.map((x) => new Post(x));
  }

  createLiElement() {
    let li = document.createElement("li");
    li.className = "list-group-item list-group-item-action";
    li.setAttribute('style','cursor: pointer')
    li.innerHTML = this.title
    li.setAttribute("data-postslist", "postlist");
    return li;
  }
}


// {/* <ul class="list-unstyled">
//   <li class="media">
//     <img class="mr-3" src="..." alt="Generic placeholder image">
//     <div class="media-body">
//       <h5 class="mt-0 mb-1">List-based media object</h5>
//       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     </div>
//   </li>
//   <li class="media my-4">
//     <img class="mr-3" src="..." alt="Generic placeholder image">
//     <div class="media-body">
//       <h5 class="mt-0 mb-1">List-based media object</h5>
//       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     </div>
//   </li>
//   <li class="media">
//     <img class="mr-3" src="..." alt="Generic placeholder image">
//     <div class="media-body">
//       <h5 class="mt-0 mb-1">List-based media object</h5>
//       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     </div>
//   </li>
// </ul> */}