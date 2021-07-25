<template>
  <div class="cart-bottom">
    <div class="left">
      <div class="operate-all" @click="operateAll">
        <div class="check-box">
          <span v-show="isAllChecked">√</span>
        </div>
        <span>全选</span>
      </div>
      <span class="totalPrice">合计：</span>
      <span class="totalPrice number">￥{{ totalPrice }}</span>
    </div>
    <div class="right" @click="toPay">结算({{ checkedCount }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cartBottomBar",
  methods: {
    operateAll() {
      this.$store.dispatch("operateAll");
      console.log(this.isAllChecked);
    },
    toPay() {
      this.checkedCount == 0 && this.$toast.show("还未选择商品哟", 1500);
    },
  },
  computed: {
    ...mapGetters(["cartList", "checkedCount", "isAllChecked"]),
    totalPrice() {
      let total = 0;
      for (let product of this.cartList) {
        product.checked == true && (total += product.price * product.count);
      }
      return total.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  font-size: 30px;
  background-color: rgb(238, 236, 236);
}

.cart-bottom .left {
  float: left;
}

.cart-bottom .right {
  float: right;
}

.cart-bottom .left {
  display: flex;
}

.cart-bottom .left > div {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.left .operate-all {
  position: relative;
  height: 40px;
  margin-right: 20px;
  padding-left: 10px;
  /* line-height: 40px; */
}

.operate-all div,
span {
  float: left;
  height: 40px;
  line-height: 40px;
}

.left .number {
  color: rgb(226, 109, 80);
  font-size: 20px;
  font-weight: 700;
}

.cart-bottom .check-box {
  /* display: inline-block; */
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-top: 10px;
  text-align: right;
  background-color: #fff;
}

.cart-bottom .check-box span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  width: 20px;
  text-align: center;
  background-color: rgb(226, 109, 80);
  color: #fff;
  font-weight: 700;
  border-radius: 50%;
}

.cart-bottom span {
  font-size: 17px;
}

.cart-bottom .right {
  position: relative;
  right: 0;
  bottom: 0;
  height: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 30%;
  font-size: 17px;
  font-weight: 700;
  background-color: rgb(238, 82, 43);
  color: #fff;
  margin-right: 0;
  bottom: 0;
}
</style>