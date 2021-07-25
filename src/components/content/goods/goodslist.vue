<template>
  <div class="goodslist">
    <singlegoods
      v-for="(item, index) in goods"
      :key="index"
      :goodsitem="item"
      class="thegoods"
    />
  </div>
</template>

<script>
import singlegoods from "./singlegoods";

export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
  components: {
    singlegoods,
  },
};
</script>

<style>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.goodslist .thegoods {
  flex: 1;
  width: 47%;
  margin: 4px;
}
</style>