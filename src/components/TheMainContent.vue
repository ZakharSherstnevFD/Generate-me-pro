<template>
  <div class="main">
    <Header/>
    <table>
      <router-view @search="search = $event" :filter="filter"></router-view>
    </table>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'

export default {
  components: {
    Header
  },
  props: {
    filter: Array
  },
  data() {
    return {
      search: '',

    }
  },

  watch: {
    search(val) {
      this.$emit('search', val);
    },

  },

}
</script>
<style scoped>
.main {
  background: #f9f9f9;
  width: 100%;
}
table {
  padding: 12px;
  width: 100%;
}
</style>
