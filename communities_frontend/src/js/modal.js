let sample = `
<div class="popup-overlay"></div>
<div class="popup">
  <div class="popup-close" onclick="closeCommunityForm()">&times;</div>
  <div class="form">
    <div class="avatar">
      <img src="./src/img/COMMUNITY.png" alt="">
    </div>
    <div class="header">
      Create New Community
    </div>
    <div class="element">
      <label for="name">Community Name:</label>
      <input type="text" id="name">
    </div>
    <div class="element">
      <button id="createCommunity" onclick="makeCommunity()">Create!</button>
    </div>
  </div>
</div>`