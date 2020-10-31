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