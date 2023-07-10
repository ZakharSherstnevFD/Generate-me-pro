<template>
  <div class="content-imageStock">

    <div class="images__content-imageStock">
      <img v-for="img in images" :key="img.id" :src="img.url">
    </div>
  </div>
</template>
<script setup>
</script>

<script>

export default {
  data() {
    return {
      images: [
        {
          id: '1',
          url: require('../assets/img/1.jpg'),
          Gender: 'Girl',
          Age: '<25',
          Country: 'Asia',
        },
        {
          id: '2',
          url: require('../assets/img/2.jpg'),
          Gender: 'Girl',
          Age: '<25',
          Country: 'Asia',
        },
        {
          id: '3',
          url: require('../assets/img/3.png'),
          Gender: 'Boy',
          Age: '26-45',
          Country: 'Europa',
        },
      ]
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
