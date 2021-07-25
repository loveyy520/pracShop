<template>
  <div class="swiperitem">
    <slot name="swiperitem"></slot>
  </div>
</template>

<script>
export default {
  name: "swiperitem",
};
</script>

<style scoped>
.swiperitem {
  /* display: inline-block; */
  float: left;
  width: 100%;
  flex-shrink: 0;
}

.swiperitem img {
  width: 100%;
}
</style>