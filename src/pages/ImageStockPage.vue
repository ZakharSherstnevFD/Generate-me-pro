<template>
  <div class="content-imageStock">

    <div class="images__content-imageStock">
      <img  v-for="(img, index) in images" :key="index"  :src="img.url">

    </div>
  </div>
</template>
<script setup>
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images: this.$store.getters.getImages
    }
  },
  created() {
    for (let i = 0; i < 30; i++) {
      axios
        .get('https://random.dog/woof.json')
        .then(response => {
          this.images.push(response.data)
        })
    }
    }

}
</script>
<style scoped>
img {
  width: 260px;
  height: 260px;
  padding: 10px;
  border-radius: 30px;
}
</style>
