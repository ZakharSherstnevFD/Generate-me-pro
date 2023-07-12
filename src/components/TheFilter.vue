<template>
  <div class="filter-search">
    <table>
      <tr>
        <td><input placeholder="Search by ID" type="text"></td>
        <td><input placeholder="Search by Name" type="text" v-model="search"></td>
        <td><input placeholder="Search by Offer" type="text"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //текст поля ввода названия продукта
      search: '',
    }
  },
  watch: {
    //слежу за изменеиниями в поле ввода названия продукта и отправляю эмит родителю
    search(val) {
      this.$emit('search', val);
    }
  }
}
</script>

<style scoped>
.filter-search {
  padding:12px;
}

input,
select {
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
</style>
