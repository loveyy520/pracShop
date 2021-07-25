<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <p class="info-title">{{ goods.title }}</p>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.info-title {
  font-weight: 500;
  font-size: 20px;
  font-family: "Microsoft YaHei";
}
.info-price {
  display: flex;
  width: 70%;
  color: rgb(155, 155, 155);
  /* text-align: center; */
}
.info-price span {
  flex: 1;
}
.info-price .n-price {
  color: rgb(238, 38, 38);
  font-size: 25px;
  padding-left: 8px;
}
.info-price .o-price {
  text-decoration: line-through;
  padding-top: 15px;
  text-align: center;
  padding-left: 1px;
}
.info-price .discount {
  background-color: rgb(248, 79, 79);
  color: #fff;
  padding: 0;
  margin-bottom: 5px;
  margin-left: 0;
  font-family: fantasy;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-radius: 13px;
}
.info-others {
  display: flex;
  text-align: center;
  margin: auto;
  width: 100%;
}
.info-others span {
  flex: 1;
  color: rgb(124, 123, 123);
  text-align: center;
}
.info-services {
  display: flex;
  text-align: center;
  margin-left: 0;
  font-size: 8px;
  height: 10px;
  line-height: 10px;
  color: rgb(124, 123, 123);
}
.info-services span {
  flex: 1;
  margin-left: 0;
  height: 100%;
}
.info-services img {
  flex: 1;
  margin-left: 0;
  width: 14px;
  height: 14px;
}
</style>