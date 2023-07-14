<template>
  <div class="filter-search">

    <label>Search by Country</label>
    <select v-model="countrySearch">
      <option selected="selected">Не выбран</option>
      <option>Европа</option>
      <option>Азия</option>
      <option>Латинская Америка</option>
      <option>Африка</option>
    </select>
    <label>Search by Gender</label>
    <select v-model="genderSearch">
      <option selected="selected">Не выбран</option>
      <option>Женский</option>
      <option>Мужской</option>
    </select>

  </div>
</template>

<script>
export default {
  data() {
    return {
        countrySearch: '',
        genderSearch: '',
    }
  },
  watch: {
    //слежу за изменеиниями в поле ввода названия продукта и отправляю эмит родителю
    search(val) {
      console.log(this.countrySearch)
      this.$emit('countrySearch', val);
    }
  }
}
</script>

<style scoped>
.filter-search {
  padding: 12px;
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
