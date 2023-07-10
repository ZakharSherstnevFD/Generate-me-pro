<template>
  <div class="wrapper">
    <Navbar/>
    <MainContent/>

  </div>
</template>

<script>
import MainContent from '@/components/TheMainContent.vue'
import Navbar from '@/components/TheNavbar.vue'

export default {
  components: {
    MainContent, Navbar
  },
  data() {return {}},


};
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
