<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name="scroll"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x = 0, y = 0, layTime = 300) {
      this.scroll && this.scroll.scrollTo(x, y, layTime);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getLocationY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
  mounted() {
    // 创建滚动实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
};
</script>

<style scoped>
/* 默认滚动区样式 */
.wrapper {
  height: 100%;
  width: 100%;
  /* margin-top: 45px; */

  /* background-color: rgb(241, 190, 192); */
  overflow: hidden;
}
</style>