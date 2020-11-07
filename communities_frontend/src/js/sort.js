class Sort{
    
  static sortByFirstLetter(list,idName,title){
    !!list[0].name ? list.sort((a, b) => (a.name > b.name) ? 1 : -1) : list.sort((a, b) => (a.title > b.title) ? 1 : -1)
    document.querySelector(idName).innerHTML = ""
    displayOnDom(list,idName, title)
  }
  
  static sortByOldest(list,idName,title){
    list.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
    document.querySelector(idName).innerHTML = ""
    displayOnDom(list,idName, title)
  }
  
  static sortByNewest(list,idName,title){
    list.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
    document.querySelector(idName).innerHTML = ""
    displayOnDom(list,idName, title)
  }

}

function searchInput(){
  let input = document.createElement('input')
  input.setAttribute('type','text')
  input.setAttribute('onkeyup','searchDOMlist()')
  input.setAttribute('placeholder','Search')
  input.setAttribute('aria-label','Search')
  input.setAttribute('id','searchInput')
  input.setAttribute('style','float:right;margin: 10px 10px 0 0 ;')
  return input
}

function searchDOMlist() {
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  if (!!document.getElementById("communitiesList").style.display){
    ul = document.getElementById("postsList");
  } else {
    ul = document.getElementById("communitiesList");
  }
  
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      txtValue = li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function dropDownMenu(list,idName,title){
  let span = document.createElement('span')
  span.className = "align-items-end"
  span.setAttribute('id','sortMenu')
  let button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn btn-secondary dropdown-toggle'
  button.idName = "dropdownMenu1"
  button.setAttribute('data-toggle','dropdown')
  button.setAttribute('aria-haspopup','true')
  button.setAttribute('aria-expanded','false')
  button.setAttribute('style','height: 34px;margin-left: 10px;')
  button.innerText = "Sort"
  let menu = document.createElement('div')
  menu.className = "dropdown-menu"
  menu.setAttribute('aria-labelledby','dropdownMenu1')
  let sortByFirstLetter = document.createElement('a')
  let sortByNewest = document.createElement('a')
  let sortByOldest = document.createElement('a')
  sortByFirstLetter.innerText = "Sort Alphabetically"
  sortByNewest.innerText = "Sort by Newest"
  sortByOldest.innerText = "Sort by Oldest"
  sortByFirstLetter.addEventListener('click', ()=>{Sort.sortByFirstLetter(list,idName,title)})
  sortByNewest.addEventListener('click', ()=>{Sort.sortByNewest(list,idName,title)})
  sortByOldest.addEventListener('click',  ()=>{Sort.sortByOldest(list,idName,title)})
  sortByFirstLetter.className = "dropdown-item"
  sortByNewest.className = "dropdown-item"
  sortByOldest.className = "dropdown-item"
  sortByFirstLetter.style = "cursor: pointer;"
  sortByNewest.style = "cursor: pointer"
  sortByOldest.style = "cursor: pointer"
  menu.appendChild(sortByFirstLetter)
  menu.appendChild(sortByNewest)
  menu.appendChild(sortByOldest)
  span.appendChild(button)
  span.appendChild(menu)
  return span
}