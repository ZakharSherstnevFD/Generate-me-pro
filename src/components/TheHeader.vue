<template>
  <header class="header">
    <div class="name__page">
      <p>{{ pageName }}</p>
      <span>Home /</span>
    </div>
    <div class="profile">
      <p class="icon__notification">&#128276;</p>
      <img class="avatar" src="@/assets/img/avatar.jpeg">
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      pageName: 'Home',
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 12px;
}
.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name__page p {
  font-size: 17px;
}
.name__page span {
  font-size: 14px;
  color: #999;
  margin-left: 15px;
  cursor: pointer;
}
.avatar {
  max-width: 50px;
  margin-left: 20px;
  cursor: pointer;
}
.icon__notification {
  cursor: pointer;
}
</style>
