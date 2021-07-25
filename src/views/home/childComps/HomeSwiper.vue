<template>
  <swiper>
    <swiperitem slot="swiper" v-for="(item, index) in banner" :key="index">
      <a slot="swiperitem" :href="item.link">
        <img slot="swiperitem" v-lazy="item.image" alt="" />
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
import { swiper, swiperitem } from "@/components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
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
};
</script>

<style>
</style>