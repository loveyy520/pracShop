<template>
  <div id="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="txt">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
#recommend {
  display: flex;
  margin-top: 44px;
  /* height: 70px; */
  line-height: 70px;
  text-align: center;
  /* width: 100%; */
}
.recommend {
  flex: 1;
  /* left: 0; */
}
.recommend img {
  height: 70px;
  width: 70px;
  margin-bottom: 0;
}
.txt {
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  /* margin-top: 0; */
}
</style>