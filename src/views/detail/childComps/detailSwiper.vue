<template>
  <swiper class="detailSwiper">
    <swiperitem slot="swiper" v-for="(url, index) in topImgs" :key="index">
      <img slot="swiperitem" v-lazy="url" alt="" />
    </swiperitem>
  </swiper>
</template>

<script>
import { swiper, swiperitem } from "@/components/common/swiper/index.js";
export default {
  name: "detailSwiper",
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperitem,
  },
  created() {},
};
</script>

<style>
</style>