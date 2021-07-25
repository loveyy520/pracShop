<template>
  <div id="cart">
    <navbar class="nav">
      <div slot="center">购物车({{ typeCount }})</div>
    </navbar>
    <scroll class="cart-scroll" ref="cartScroll">
      <cartList class="cartList" slot="scroll" />
    </scroll>
    <cartBottom />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import scroll from "@/components/common/scroll/scroll";
import navbar from "@/components/common/navbar/navbar";
import cartList from "./childComps/cartlist";
import cartBottom from "./childComps/cartBottomBar";
import backtop from "@/components/content/backtop/backtop";
export default {
  name: "cart",
  // props: {
  //
  // },
  components: {
    scroll,
    backtop,
    navbar,
    cartList,
    cartBottom,
  },
  data() {
    return {};
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo();
    },
  },
  computed: {
    // 使用原来的getters里的方法名
    // ...mapGetters(["cartLength", "cartList"]),

    // 自定义方法名
    ...mapGetters({
      typeCount: "cartLength",
    }),
  },
  activated() {
    this.$refs.cartScroll.refresh();
    console.log("activated");
  },
};
</script>

<style scoped>
#cart {
  position: relative;
  background-color: #fff;
  height: 100vh;
}
.nav {
  position: fixed;
  z-index: 8;
  left: 0;
  right: 0;
  top: 0;

  background-color: rgb(247, 162, 167);
  color: #fff;
}
.cart-scroll {
  position: relative;
  height: calc(100% - 88px);
  left: 0;
  overflow: hidden;

  /* background-color: rgb(224, 75, 119); */
}
.cartList {
  height: 100%;
  overflow: hidden;
  margin-top: 20px;
  padding-bottom: 30px;
}
</style>