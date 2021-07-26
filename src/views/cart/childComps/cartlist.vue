<template>
  <div class="cartlist">
    <ul>
      <li v-for="(goods, index) in cartList" :key="index" class="product">
        <cartItem :product="goods" :index="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import cartItem from "./cartListItem";

export default {
  name: "cartList",

  components: {
    cartItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  mounted() {
    console.log("cartList create!", this.cartList);
  },
};
</script>

<style scoped>
.cartList {
  height: 100vh;
  position: relative;
  top: 44px;
  left: 0;
  bottom: 58px;
}

.cartList ul {
  padding: 0;
}

.wrapper {
  height: calc(100vh - 100px);
  overflow: hidden;
  /* position: relative; */
  /* left: 0; */
}

ul {
  list-style: none;
  text-align: center;
  /* width: 100%; */
}

.cartList .product {
  width: 100%;
}

.goods-list {
  /* height: calc(100% - 1000px); */
  position: relative;
  left: 0;
  bottom: 44px;
  top: 10px;
  /* background-color: rgb(241, 148, 148); */
}
</style>