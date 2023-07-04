<template>
  <div class="filter-search">
    <input type="text" v-model="search">
  </div>
</template>

<script>
export default {
props: {
  value: String
},
data() {
  return {
    search: this.value
  }
},
  watch: {
    search(val) {
      this.$emit('search', val);
    }
  }
}
</script>
