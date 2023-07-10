<template>
  <div class="container-templates">
    <div class="header__table">
      <FilterTemplates
        @search="search = $event"
      />
    </div>
    <table>
      <tr style="font-weight:bold;">
        <td>ID</td>
        <td>Name</td>
        <td>Region</td>
        <td>Offer</td>
        <td>Categories</td>
        <td>Type</td>
        <td>Upload Date</td>
      </tr>
      <tr v-for="template in templateFilter" :key="template.id">
        <td><p>{{ template.id }}</p></td>
        <td><p>{{ template.name }}</p></td>
        <td><p>{{ template.region }}</p></td>
        <td><p>{{ template.offer }}</p></td>
        <td><p>{{ template.categories }}</p></td>
        <td><p>{{ template.type }}</p></td>
        <td><p>{{ template.uploadDate }}</p></td>
      </tr>
    </table>
  </div>
</template>

<script>
import FilterTemplates from '@/components/TheFilter.vue'

export default {
  components: {
    FilterTemplates
  },

  data() {
    return {
      search: '',
      templates: this.$store.getters.getTemplates,
    }

  },

  computed: {
    templateFilter() {
      let array = this.templates;
      let search = this.search;
      // если поиск пустуй отдаем полный массив
      if (!search) return array;
      //   сбрасываем пробелы и шрифты
      search = search.trim().toLowerCase();
      // фильтр

      return array.filter((item) => {
        if (item.name.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
    },
  },

}
</script>

<style scoped>
table {
  width: 100%;
  padding: 12px;
}
td {
  padding-bottom: 15px;
}
</style>
