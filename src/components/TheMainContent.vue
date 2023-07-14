<template>
  <div class="main">
    <Header @openModal="openModal = !openModal"/>
      <router-view></router-view>
    <Modal @close="openModal = !openModal" v-if="openModal" :avatarData="avatarData"/>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Modal from '@/UI/TheModal.vue'

export default {
  components: {
    Header, Modal
  },

  data() {return {
    avatarData:
      {
        email:'email@api.com',
        profile: 'Profile',
        menuItem: 'Menu Item',
        logout: 'Logout'
      }
    ,
    openModal: false
  }},


}
</script>
<style scoped>
.main {
  background: #f9f9f9;
  width: 100%;
}

</style>
