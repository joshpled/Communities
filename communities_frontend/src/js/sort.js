class Sort{
    
  static sortByFirstLetter(list,idName,title){
    list.sort((a, b) => (a.name > b.name) ? 1 : -1)
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
  button.innerText = "Sort"
  button.style = "float: right;"
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