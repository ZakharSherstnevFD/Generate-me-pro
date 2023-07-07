<template>
  <div class="filter-search">

    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Region</th>
      <th>Offer</th>
      <th>Type</th>
      <th>Upload Date</th>
    </tr>
    <tr>
      <td><input type="text"></td>
      <td><input type="text" v-model="search"></td>
      <td><input type="text"></td>
      <td><input type="text"></td>
      <td>
        <select name="" id="">
          <option>All types...</option>
          <option>Landing</option>
          <option>PreLanding</option>
        </select>
      </td>
      <td></td>
    </tr>

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

<style scoped>


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
