<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, showTime = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, showTime);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 20;
  left: 50%;
  top: 50%;
  font-size: 22px;
  transform: translate(-50%, -50%);
  background-color: rgba(51, 49, 49, 0.6);
  border-radius: 3%;
  padding: 5px;
  color: #fff;
}
</style>