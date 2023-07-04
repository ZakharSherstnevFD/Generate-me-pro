<template>
  <div class="main">
    <Header/>
    <PageMain @search="search = $event"  :filter="filter"/>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import PageMain from '@/components/TheContentPages.vue'

export default {
  components: {
    Header, PageMain
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
</style>
