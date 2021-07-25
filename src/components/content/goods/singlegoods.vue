<template>
  <div class="singlegoods" @click="itemClick" path="/detail">
    <!-- <a :href="goodsitem.link" class="goodslink"> -->
    <img
      v-lazy="goodsitem.show ? goodsitem.show.img : goodsitem.image"
      alt=""
      @load="imgLoad"
    />
    <div class="goodsinfo">
      <p>{{ goodsitem.title }}</p>
      <span class="price">￥{{ goodsitem.price }}</span>
      <span class="cfav">{{ goodsitem.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
import { debounce } from "@/common/utils";

export default {
  name: "singlegoods",
  props: {
    goodsitem: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      url: "",
      imgLoadEmit: null,
    };
  },
  methods: {
    imgLoad() {
      // this.$bus.$emit("itemImgLoad");
      this.imgLoadEmit = debounce(() => {
        this.$bus.$emit("itemImgLoad");
      });
      this.imgLoadEmit();
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
  },
  created() {},
};
</script>

<style scoped>
/* .singlegoods {
  margin-bottom: 10px 40px;
  width: 48%;
  margin: 10px;
} */
.goodslink {
  width: 100%;
  text-decoration: none;
  color: #000;
  text-align: center;
}
.singlegoods img {
  width: 100%;
  border-radius: 5px;
}
.goodsinfo {
  font-size: 12px;
  overflow: hidden;
  margin-top: 0;
  padding-bottom: 20px;
  text-align: center;
}
.goodsinfo p {
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsinfo .price {
  color: rgb(221, 37, 37);
  margin-right: 20px;
}
.goodsinfo .cfav {
  position: relative;
  margin: auto;
}
.goodsinfo .cfav::before {
  content: "";
  position: absolute;
}
</style>