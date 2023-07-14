<template>
  <div class="content-imageStock">
    <form @change="newImg" enctype="multipart/form-data" action="" method="post">
      <input class="file__input" type="file" name="f">
    </form>
    <div class="images__content-imageStock">
      <div v-if="loading" class="preloader">
        <preloader :width="90" :height="90"/>
      </div>
      <div class="img__box__stock">
        <a style="position: relative" v-if="!loading" v-for="img in images" :key="img.id" :download="img.img" href="#">
          <img :src="img.img" alt="">
          <p>&#10133;</p>
        </a>
      </div>
      <div v-if="!loading" class="btn">
        <button @click.once="loadMore">Load More</button>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<script>
import axios from "axios";
// import filterImage from '@/components/TheFilterImage.vue'
import preloader from '@/UI/Preloader.vue'

export default {
  components: {
    preloader,
    // filterImage
  },
  data() {
    return {
      // условие показа контента и прелодера
      loading: true,
      // search: {}

    }
  },
  computed: {
    // забираю картинки из стора
    images() {
      return this.$store.getters.getImages
    }
  },
  mounted() {
    // вызываю картинки через сеттаймаут для прогрузки с АПИ
    this.getImagesLazy()
  },

  methods: {
    newImg() {
      const selectedFile = document.querySelector('.file__input').files[0];
      // имитация добавления фото, которая будет добавляться на сервер
      this.$store.getters.getImages.push(selectedFile)
    },
    // функция сеттаймаут
    getImagesLazy() {
      this.loading = true
      setTimeout(() => {
        this.getImages()
      }, 2000)
    },
    // принимаю картинки и критерии с тестового АПИ
    getImages() {
      axios
        .get('https://ctr-localhost.ru/sherstnev/imagesSockApi.php')
        .then(response => {
          let res = response.data.images;
          // весь массив с картинками
          let img = [];
          // стартовый массив с картинками
          let imgMain = [];

          // изначально вывожу на страницу 8 картнок (кидаю в стартовый массив)
          for (let i = 0; i < 8; i++) {
            img.push(res[i])
          }
          // остальные картинки кидаю в другой сассив (imgMain)
          for (let i = 8; i < res.length; i++) {
            imgMain.push(res[i])
          }
          // отправляю в стор полный массив
          this.$store.dispatch("setImages", img)
          // отправляю в стор массив со стартовыми картинками
          this.$store.dispatch("setImagesMain", imgMain)
        })
        // после полной загрузуи показываю конент и убираю прелодер
        .finally(() => (this.loading = false))
    },

    // метод подгружает остальные картинки по клику на кнопку load more
    loadMore() {
      // получаю массивы из стора
      let firstImg = this.$store.getters.getImages;
      let lastImg = this.$store.getters.getImagesMain;

      // пушу картинки из не основного массива в основной
      for (let i = 0; i < lastImg.length; i++) {
        firstImg.push(lastImg[i])
      }

      // делаю кнопку не активной после загрузки всех картинок
      let btn = document.querySelector('.btn button');
      btn.classList.add('button__stop');
    }
  }


}
</script>
<style scoped>
.img__box__stock p {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff0000;
  padding: 5px;
  border-radius: 5px;
}

img {
  width: 260px;
  height: 260px;
  padding: 10px;
  border-radius: 30px;
}

.preloader {
  display: flex;
  justify-content: center;
  height: 90vh;
}

.img__box__stock {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 50px auto;

}

.btn {
  display: flex;
  justify-content: center;
}

.btn button {
  background: #ff0000;
  color: #fff;
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
}

.button__stop {
  opacity: 0.5;
  cursor: default !important;
}
.file__input {
  margin-top: 20px;
  margin-left: 12px;
}
</style>
