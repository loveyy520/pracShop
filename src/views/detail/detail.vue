<template>
  <div id="detail">
    <!-- <a :href="position" class="anchor"> -->
    <detailNav class="detailNav" @titleClick="scrollTo" ref="detailNav">
    </detailNav>
    <!-- </a> -->
    <scroll
      class="wrapper"
      ref="detailscroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="isShowBackTop"
    >
      <div slot="scroll" class="content">
        <div>
          <detailSwiper :top-imgs="topImgs" class="swiper"></detailSwiper>
          <detail-base-info :goods="goods"></detail-base-info>
          <detail-shop :shop="shop"></detail-shop>
          <detailInfo
            :detailInfo="detailInfo"
            @imgLoad="imgLoad"
            class="detail-info"
          />
          <detail-params-info :params="goodsParams" ref="detailParams" />
          <detailComment :comment-info="commentInfo" ref="detailComment" />
          <goodslist
            :goods="recommend"
            ref="detailRecommend"
            @imgLoad="imgLoad"
            class="goods"
          />
        </div>
      </div>
    </scroll>
    <backtop v-show="backTopShow" @click.native="goTop" />
    <detail-bottom-bar class="bottom" @addToCart="addToCart" @buy="buy" />
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  goods,
  Shop,
  GoodsParams,
} from "@/network/detail";

import { mapActions } from "vuex";

import detailNav from "./childComps/detailNavBar";
import scroll from "@/components/common/scroll/scroll";
import detailSwiper from "./childComps/detailSwiper";
import DetailBaseInfo from "./childComps/detailBaseInfo";
import detailShop from "./childComps/detailShop";
import detailInfo from "./childComps/detailInfo";
import detailParamsInfo from "./childComps/detailParamsInfo";
import detailComment from "./childComps/detailComment";
import goodslist from "@/components/content/goods/goodslist";
import backtop from "@/components/content/backtop/backtop";
import detailBottomBar from "./childComps/detailBottomBar";

export default {
  name: "detail",
  components: {
    detailNav,
    scroll,
    detailSwiper,
    DetailBaseInfo,
    detailShop,
    detailInfo,
    detailParamsInfo,
    detailComment,
    goodslist,
    backtop,
    detailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommend: [],
      // 锚点记号，BS里不好直接用
      // position: "",
      unitPosition: [],
      backTopShow: true,
    };
  },
  methods: {
    ...mapActions(["addCart"]),
    imgLoad() {
      // console.log("xixixi");
      // this.$refs.detailscroll.refresh();
      this.unitPosition = [];
      if (
        this.$refs.detailParams &&
        this.$refs.detailComment &&
        this.$refs.detailRecommend
      ) {
        this.unitPosition.push(
          this.$refs.detailParams.$el.offsetTop,
          this.$refs.detailComment.$el.offsetTop,
          this.$refs.detailRecommend.$el.offsetTop
        );
      }
    },
    isShowBackTop(position) {
      let realPosition = -position.y;
      this.backTopShow = realPosition > 1500 ? true : false;

      let counter = 0;
      for (let y of this.unitPosition) {
        if (realPosition < y) {
          this.$refs.detailNav.currentIndex = counter;
          break;
        } else {
          counter++;
          counter == 3 && (this.$refs.detailNav.currentIndex = counter);
        }
      }
    },
    goTop() {
      this.$refs.detailscroll.scrollTo(0, 0, 300);
    },
    scrollTo(index) {
      let position = 0;
      switch (index) {
        case 0:
          break;
        case 1:
          position += -this.unitPosition[0];
          break;
        case 2:
          position += -this.unitPosition[1];
          break;
        default:
          position += -this.unitPosition[2];
      }
      this.$refs.detailscroll.scrollTo(0, position, 0);
    },

    addToCart() {
      const product = {};
      product.image = this.topImgs[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.$store
      //   .dispatch("addCart", product)
      this.addCart(product)
        .then((res) => this.$toast.show(res))
        .catch((err) => this.$toast.show("加入购物车失败"));
    },
    buy() {
      console.log("buynow");
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      this.topImgs = data.itemInfo.topImages;
      this.goods = new goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      data.rate.cRate > 0 && (this.commentInfo = data.rate.list[0]);
    });
    getRecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
  mounted() {
    this.$bus.$on("itemImgLoad", () => {
      this.imgLoad();
    });
  },
  activated() {
    this.iid = this.$route.params.iid;
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.imgLoad());
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
/* .anchor {
  color: black;
} */
.detailNav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}

#detail .content .swiper {
  margin-top: 44px;
}

.wrapper {
  /* height: 100vh; */
  position: absolute;
  background-color: #fff;
  /* top: 44px; */
  left: 0;
  /* z-index: 9; */
}
#detail .content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 45px;
  /* margin-bottom: 50px; */
  /* background-color: rgb(202, 111, 111); */
}
#detail .content .detai-info {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid rgb(110, 108, 108);
}
#detail .wrapper .content .goods {
  margin-bottom: 45px;
}
</style>