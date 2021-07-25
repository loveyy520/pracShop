<template>
  <div class="detaiNav">
    <navbar>
      <div slot="left" class="backIcon" @click="backIconClick">&lt;</div>
      <div slot="center" class="title">
        <span
          v-for="(title, index) in titles"
          :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{ active: currentIndex == index }"
        >
          {{ title }}
        </span>
      </div>
      <div slot="right">hhh</div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
export default {
  name: "detailNav",
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backIconClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.backIcon {
  padding-left: 20px;
  font-size: 40px;
  color: rgb(77, 75, 73);
}
.title {
  display: flex;
  text-align: center;
}
.title-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
  padding-top: 0;
  font-size: 14px;
}
.active {
  color: deeppink;
}
</style>