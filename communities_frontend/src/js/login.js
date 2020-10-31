function loginUser(e) {
  let password = event.target.parentElement.parentElement.querySelector(
    "#password"
  ).value;
  let username = event.target.parentElement.parentElement.querySelector(
    "#username"
  ).value;
  fetch("http://localhost:3000/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
}

// LOGIN FORM OPEN AND CLOSE

function openLoginForm() {
  document
    .querySelector("#signUpModal")
    .setAttribute("style", "display: hidden");
  document.body.classList.add("showLoginForm");
}

function closeLoginForm() {
  let inputValues = document
    .querySelector("#loginModal")
    .querySelectorAll('[data-input="login"]');
  for (let x of inputValues) {
    x.value = "";
  }
  document.querySelector("#signUpModal").removeAttribute("style");
  document.body.classList.remove("showLoginForm");
}
