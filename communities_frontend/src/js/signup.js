function openSignUpForm() {
  document
    .querySelector("#loginModal")
    .setAttribute("style", "display: hidden");
  document.body.classList.add("showSignUpForm");
}
function closeSignUpForm() {
  let inputValues = document
    .querySelector("#signUpModal")
    .querySelectorAll('[data-input="signup"]');
  for (let x of inputValues) {
    x.value = "";
  }
  document.querySelector("#loginModal").removeAttribute("style");
  document.body.classList.remove("showSignUpForm");
}

// FUNCTON FOR POST CREATE
function signUpUser() {
  let inputs = event.target.parentElement.parentElement.querySelectorAll(
    '[data-input="signup"]'
  );
  let data = {
    user: {
      username: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
      password_confirmation: inputs[3].value,
    },
  };

  const configObject = {
    method: "POST",
    credentials: "include",
    headers: {
      "X-CSRF-Token": getCSRFToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/api/v1/users", configObject)
    .then((resp) => resp.json())
    .then(function (json) {
      if (json.errors) {
        console.log(json.errors)
        }
       else {
        console.log(json)
      }
    });
}
