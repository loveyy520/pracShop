<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol
      :titles="titles"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="tabControl0"
      class="tabTop"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="isShowBackTop"
      @pullingUp="loadMore"
    >
      <div slot="scroll">
        <div>
          <swiper :imgs="banner" />
          <recommendview :recommends="recommend.list" />
          <feature />
          <tabcontrol
            :titles="titles"
            @tabClick="tabClick"
            ref="tabControl"
            v-show="!isTabFixed"
          />
          <goodslist :goods="showGoods" />
        </div>
      </div>
    </scroll>
    <backtop @click.native="backClick" v-show="backTopShow" />
  </div>
</template>

<script>
import { debounce } from "@/common/utils";

// import homeswiper from "./childComps/HomeSwiper";
import swiper from "@/components/common/swiper/swiper";
import recommendview from "./childComps/RecommendView";
import feature from "./childComps/FeatureViw.vue";
import goodslist from "@/components/content/goods/goodslist";

import scroll from "@/components/common/scroll/scroll";
import navbar from "@/components/common/navbar/navbar";
import tabcontrol from "@/components/content/tabcontrol/tabcontrol";
import backtop from "@/components/content/backtop/backtop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "home",
  components: {
    navbar,
    // homeswiper,
    swiper,
    scroll,
    recommendview,
    feature,
    tabcontrol,
    backtop,
    goodslist,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          list: [],
          page: 1,
        },
        new: {
          list: [],
          page: 1,
        },
        sell: {
          list: [],
          page: 0,
        },
      },
      currentType: "pop",
      isTabFixed: false,
      backTopShow: false,
      loacaton: {
        x: 0,
        y: 0,
      },
      tabsY: this.isTabFixed ? 385 : 0,
      // tabControl里各个tab的y坐标值
      loacatonOfTabs: [0, 0, 0],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      res.data.data.banner.list.forEach((img) => this.banner.push(img.image));
      console.log(this.banner);
      this.recommend = res.data.data.recommend;
    });

    for (let type in this.goods) {
      this.getHomeGoods(type);
    }
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImgLoad", () => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
    this.$refs.scroll.scroll.on("scroll");
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.loacaton.y, 0);
  },
  deactivated() {
    this.loacaton.y = this.$refs.scroll ? this.$refs.scroll.getLocationY() : 0;
  },
  methods: {
    // 网络请求方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
          this.$refs.scroll.scroll.refresh();
        })
        .catch((err) => {
          console.log("商品数据请求失败");
        });
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    // 事件监听方法
    tabClick(index) {
      this.loacatonOfTabs[this.$refs.tabControl.currentIndex] =
        this.$refs.scroll.getLocationY();
      const lastLocation =
        this.loacatonOfTabs[this.$refs.tabControl.currentIndex];

      this.currentType = index == 0 ? "pop" : index == 1 ? "new" : "sell";
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl0.currentIndex = index;

      const y = this.isTabFixed
        ? -this.loacatonOfTabs[index] >= 732
          ? this.loacatonOfTabs[index]
          : -732
        : lastLocation;
      this.$refs.scroll.scrollTo(0, y, 0);
      this.$refs.scroll.refresh();
    },
    backClick() {
      this.$refs.scroll.scrollTo();
    },
    isShowBackTop(position) {
      this.backTopShow = -position.y > 1000 ? true : false;
      this.isTabFixed = -position.y >= 732 ? true : false;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  color: #fff;
  width: 100%;
  background-color: rgb(241, 145, 159);
  position: fixed;
  top: 0;
  z-index: 5;
}
.tabTop {
  position: relative;
  z-index: 1;
}
.content {
  overflow: hidden;
  height: calc(100%-90px);
  margin-top: 45px;
  margin-bottom: 45px;
  /* background-color: rgb(61, 149, 244); */
  /* position: absolute;
  top: 44px;
  bottom: 49px; */
}
</style>