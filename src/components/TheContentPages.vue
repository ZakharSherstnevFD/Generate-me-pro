<template>
  <div class="container-templates">
    <div class="header__table">
      <FilterTemplates
        :value="search"
        @search="search = $event"
      />
    </div>
    <div v-for="template in filter" :key="template.id">
      <div class="body__table">
        <p>{{ template.id }}</p>
        <p>{{ template.name }}</p>
        <p>{{ template.region }}</p>
        <p>{{ template.offer }}</p>
        <p>{{ template.categories }}</p>
        <p>{{ template.type }}</p>
        <p>{{ template.date }}</p>
        <p>{{template}}</p>
      </div>
    </div>

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
