<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(url, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="url"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
      imgAmount: 0,
    };
  },
  methods: {
    imgLoad() {
      ++this.count === this.imgAmount && this.$emit("imgLoad");
    },
  },
  watch: {
    detailInfo() {
      this.imgAmount = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.detailInfo img {
  width: 100%;
}
</style>