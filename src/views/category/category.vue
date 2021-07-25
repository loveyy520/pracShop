<template>
  <div class="wrapper">
    <ol>
      <li><button @click="hhh()">按钮</button></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "class",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      // probeType: 3,
      // pullUpLoad: true,
      // click: false,
    });
    // this.scroll.on("scroll", (position) => {
    //   console.log(position);
    // });
    // this.scroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    // });
  },
  // methods: {
  // hhh() {
  //   console.log("憨批 哈哈哈");
  // },
  // },
};
</script>

<style scoped>
.wrapper {
  height: 160px;
  background-color: rgb(182, 92, 162);
  overflow: hidden;
}
</style>