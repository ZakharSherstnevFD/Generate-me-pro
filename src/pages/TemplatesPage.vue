<template>
  <div class="container-templates">
    <div class="header__table">
      <FilterTemplates
        @search="search = $event"
      />
    </div>
    <table>
      <tr class="template__name" style="font-weight:bold;">
        <td @click="sort('id')">ID &#8595;</td>
        <td @click="sort('name')">Name &#8595;</td>
        <td>Region</td>
        <td>Offer</td>
        <td @click="sort('categories')">Categories &#8595;</td>
        <td @click="sort('type')">Type &#8595;</td>
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
    <section>
      <div class="_container">
        <div class="button-list">
          <div @click="prevPage" class="btn btnPrimary">&#8592;</div>
          <div @click="nextPage" class="btn btnPrimary">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FilterTemplates from '@/components/TheFilterTemplates.vue'

export default {
  components: {
    FilterTemplates
  },

  data() {
    return {
      // данные поля ввода названия продукта из дочернего элемента
      search: '',
      // массив данных из стора templates.js
      templates: this.$store.getters.getTemplates,
      // данные для сортировки
      currentSort: "id",
      currentSortDir: "asc",
      // данные для пагинации
      page: {
        current: 1,
        length: 17,
      },
    }

  },

  computed: {
    // поиск по названию продукта
    templateFilter() {
      let array = this.templates;
      let search = this.search;
      // если поиск пустуй отдаем  массив с пагинацией
      if (!search)  return this.templates
      // сортировка
        .sort((a, b) => {
          let mod = 1;
          if (this.currentSortDir === "desc") mod = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
          return 0;
        })
        //пагинация
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });

      //ФИЛЬТР ПОИСКОВОЙ СТРОКИ

      //   сбрасываем пробелы и шрифты
      search = search.trim().toLowerCase();
      // фильтр

      return array.filter((item) => {
        if (item.name.toLowerCase().indexOf(search) !== -1) {
          // возвращаю отфильтрованный массив
          return item;
        }
      });
    },
  },
  methods: {
    //метод сортировки
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = e;
    },

    //методы пагинации (кнопки)
    prevPage() {
      if (this.page.current > 1) {
        this.page.current -= 1;
      }
    },
    nextPage() {
      if (this.page.current * this.page.length < this.templates.length) {
        this.page.current += 1;
      }
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
.button-list {
  display: flex;
  justify-content: center;
}
.button-list .btn {
  margin: 20px;
  font-size: 30px;
  cursor: pointer;
  background: #ff0000;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
}
.template__name td {
  cursor: pointer;
}
</style>
