let sample = `<div class="center">
  <button onclick="openLoginForm()">Login</button>
</div>
<div class="popup-overlay"></div>
<div class="popup">
  <div class="popup-close" onclick="closeLoginForm()">&times;</div>
  <div class="form">
    <div class="avatar">
      <img src="https://bit.ly/31pHqJb" alt="">
    </div>
    <div class="header">
      Member login
    </div>
    <div class="element">
      <label for="username">Username</label>
      <input type="text" id="username">
    </div>
    <div class="element">
      <label for="password">Password</label>
      <input type="password" id="password">
    </div>
    <div class="element">
      <button>Login</button>
    </div>
  </div>
</div>`