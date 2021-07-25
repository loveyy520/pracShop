<template>
  <div id="maintabbar">
    <tabbar>
      <tabbaritem path="/home" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/home.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home-active.jpg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activeColor="green">
        <img slot="item-icon" src="@/assets/img/tabbar/category.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/category-active.jpg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="green">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/cart-active.jpg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/me.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/me-active.jpg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "../common/tabbar/tabbar";
import tabbaritem from "../common/tabbar/tabbaritem";

export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style>
@import "../../assets/css/base.css";
</style>
