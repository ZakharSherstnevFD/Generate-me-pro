<template>
  <div class="wrapper">
    <Navbar/>
    <MainContent @search="search = $event"  :filter="templateFilter"/>

  </div>
</template>

<script>
import MainContent from '@/components/TheMainContent.vue'
import Navbar from '@/components/TheNavbar.vue'

export default {
  components: {
    MainContent, Navbar
  },
  data() {
    return {
      // строка поиска от эмита
      search:'',

      // массив seeders
       templates: [
         {
           id: 1,
           name: 'Goji Cream Derma Today',
           region: 'VLG',
           offer: 'Goji Cream',
           categories: 'Красота',
           type: 'Landing',
           uploadDate: 27,
         },
         {
           id: 2,
           name: 'Princess Mask SkinInique',
           region: 'MSK',
           offer: 'Princess Mask',
           categories: 'Красота',
           type: 'PreLanding',
           uploadDate: 27,
         },
         {
           id: 3,
           name: 'Psoridex Girl Blog',
           region: 'VRN',
           offer: 'Psoridex',
           categories: 'Здоровье',
           type: 'Landing',
           uploadDate: 27,
         }
       ]
    };
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
      console.log(array);
      return array.filter((item) => {
        if(item.name.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
    }
  },

};
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
