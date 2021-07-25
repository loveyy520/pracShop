<template>
  <div class="tabcontrol">
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="tabitem"
      @click="changecolor(index)"
    >
      <span :class="{ active: index === currentIndex }" class="tabunderline">{{
        title
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changecolor(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  background-color: #fff;
  position: sticky;
  top: 44px;
}
.tabitem {
  flex: 1;
  text-align: center;
}
.tabunderline {
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  padding-bottom: 2px;
}
.active {
  color: deeppink;
  border-bottom: 1px solid deeppink;
}
</style>