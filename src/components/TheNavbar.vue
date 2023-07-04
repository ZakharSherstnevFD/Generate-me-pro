<template>
  <div class="navbar">
    <div @click="closeNav" class="logo">
      <img src="@/assets/img/logo.png" alt="">
      <p>&laquo;</p>
    </div>
    <nav class="nav">
      <ul>
        <li><p>Dashboard</p> <span>&#9776;</span></li>
        <li><p>Templates</p><span>&#9745;</span></li>
        <li><p>Image Stock</p><span>&#10066;</span></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav(e) {
      let navBar = document.querySelector('.navbar');
      navBar.classList.toggle('_active');
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 260px;
  background: #161616;
  min-height: 100vh;
}
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("@/assets/img/logo_bg.jpeg") no-repeat;
  background-size: cover;
  cursor: pointer;
  padding: 20px 15px;
}
.logo p {
  color: #fff;
  font-size: 40px;
}
.nav ul li {
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
}
.nav ul li:hover {
  background: #000;
  border-left: 3px solid #ff0000;
  color: #fff;
}
._active {
  margin-left: -200px;

}
.navbar {
  transition: all .4s ease 0s;
}

</style>
