<template>
  <div class="backtop" @click="backclick" :v-show="{ isShow: isShow }">
    <img src="@/assets/img/backtop/backtop.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "backtop",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    backclick() {
      this.$emit("backclick");
    },
  },
};
</script>

<style scoped>
.backtop {
  /* display: none; */
  height: 44px;
  width: 44px;
  position: fixed;
  bottom: 65px;
  right: 50px;
  z-index: 15;
}
.backtop img {
  width: 100%;
}
</style>