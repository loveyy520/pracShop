<template>
  <div class="shopInfo" v-if="Object.keys(shop).length != 0">
    <div class="name-logo">
      <img :src="shop.logo" alt="" class="shopLogo" />
      <div class="shopName">{{ shop.name }}</div>
    </div>
    <div class="sell-info">
      <div class="sell">
        <span>{{ shop.sells }}万</span>
        <span>{{ shop.goodsCount }}</span>
      </div>
      <div class="shopGoods">
        <span>总销量</span>
        <span>全部宝贝</span>
      </div>
    </div>
    <div class="score">
      <div v-for="(item, index) in shop.score" :key="index">
        <span>{{ item.score }}</span>
        <span>{{ item.score >= 4.9 ? "高" : "低" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      isBetter: "高",
    };
  },
  created() {
    // console.log(shop.sell);
  },
};
</script>

<style>
.name-logo {
  display: flex;
  text-align: center;
  height: 45px;
  line-height: 44px;
}
.shopName {
  flex: 1;
  margin: 0 25px;
  height: 44px;
  line-height: 44px;
  font-size: 25px;
  color: rgb(92, 92, 92);
}
.shopLogo {
  /* flex: 1; */
  margin: 25px 5px;
  width: 44px;
  height: 44px;
  line-height: 44px;
}
.sell-info .sell,
.shopGoods {
  display: flex;
}
.sell-info span {
  flex: 1;
}
</style>