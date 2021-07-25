<template>
  <div class="wrapper">
    <div></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {});
  },
};
</script>

<style scoped>
.wrapper {
  height: 800px;
  background-color: rgb(252, 252, 252);
  overflow: hidden;
}
</style>