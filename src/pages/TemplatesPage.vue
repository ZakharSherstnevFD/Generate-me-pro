<template>
  <div class="container-templates">
    <div class="header__table">
      <FilterTemplates
        :value="search"
        @search="search = $event"
      />
    </div>
    <tr v-for="template in filter" :key="template.id">
      <td><p>{{ template.id }}</p></td>
      <td><p>{{ template.name }}</p></td>
      <td><p>{{ template.region }}</p></td>
      <td><p>{{ template.offer }}</p></td>
      <td><p>{{ template.categories }}</p></td>
      <td><p>{{ template.type }}</p></td>
      <td><p>{{ template.uploadDate }}</p></td>
    </tr>
  </div>
</template>

<script>
import FilterTemplates from '@/components/TheFilter.vue'

export default {
  components: {
    FilterTemplates
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
    }
  }
}
</script>

<style scoped>

</style>
