<template>
  <div class="main">
    <Header/>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'

export default {
  components: {
    Header
  },

  data() {return {}},

}
</script>
<style scoped>
.main {
  background: #f9f9f9;
  width: 100%;
}

</style>
