function loginUser(e){
  let password = event.target.parentElement.parentElement.querySelector('#password').value
  let username = event.target.parentElement.parentElement.querySelector('#username').value
  fetch("http://localhost:3000/session", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    username: username,
    password: password,
  })
})};

// LOGIN AND SIGNUP FORMS

function openLoginForm(){
  document.querySelector('#signUpModal').setAttribute('style','display: hidden')
  document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
  let inputValues = document.querySelector('#loginModal').querySelectorAll('[data-input="login"]')
  for (let x of inputValues){
    x.value = ''
  }
  document.querySelector('#signUpModal').removeAttribute('style')
  document.body.classList.remove("showLoginForm");
}
function openSignUpForm(){
  document.querySelector('#loginModal').setAttribute('style','display: hidden')
  document.body.classList.add("showSignUpForm");
}
function closeSignUpForm(){
  let inputValues = document.querySelector('#signUpModal').querySelectorAll('[data-input="signup"]')
  for (let x of inputValues){
    x.value = ''
  }
  document.querySelector('#loginModal').removeAttribute('style')
  document.body.classList.remove("showSignUpForm");
}


// FUNCTON FOR POST CREATE
// function makeNickname(){
// fetch("http://localhost:3000/api/v1/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     nickname: "Byron",
//   })
// })};