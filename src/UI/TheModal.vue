<template>
  <transition name="modal">
    <div @click="$emit('close')" class="modal__wrapper">
      <div @click.stop="" class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <span class="modal-title"> <p>{{ avatarData.email }}</p> </span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>

        <!-- body -->
        <div class="modal-body">
          <a href="#">
            profile
          </a>
          <a href="#">
            menuItem
          </a>
          <br>
          <a href="#">
            logout
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    avatarData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) this.$emit("close");
    });
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
}

.modal-content {
  position: relative;
  max-width: 300px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 300px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-body a {
  color: #999;
  margin-bottom: 5px;
}
</style>
