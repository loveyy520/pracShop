<template>
  <div id="swiper" class="swiper">
    <slot name="swiper"></slot>
  </div>
</template>

<script>
import swiperitem from "./swiperitem";
export default {
  name: "swiper",
  components: {
    swiperitem,
  },
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {}, 1500);
  },
};
</script>

<style>
#swiper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  width: 100%;
  /* background-color: #fc5ec7; */
  line-height: 100px;
  text-align: center;
}
</style>