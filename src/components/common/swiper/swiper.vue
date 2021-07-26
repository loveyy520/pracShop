<template>
  <div id="swiper" class="swiper">
    <div class="display-area">
      <div class="img-list">
        <img
          :src="img"
          v-for="(img, index) in imgs"
          :key="index"
          :img="img"
          alt=""
          class="img"
          style="left: 0; width: 100vw"
          ref="imgs"
        />
        <img
          :src="imgs[0]"
          :index="imgs.length"
          alt=""
          class="img"
          ref="last-img"
        />
      </div>
    </div>
    <ul class="promo-nav">
      <li
        v-for="(img, index) in imgs"
        :key="index"
        class="point"
        :class="{ active: currentIndex == index }"
        @click="select(index)"
      ></li>
    </ul>
  </div>
</template>



<script>
import swiperitem from "./swiperitem";
export default {
  name: "swiper",
  components: {
    swiperitem,
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  methods: {
    init() {
      let i = 0;
      // console.log(i);
      // console.log(this, $refs.imgs);
      this.$refs.imgs.forEach((img) => {
        img.style.left = img.style.width * i;
        i++;
        console.log(img.style.left, "hhh", i);
      });
    },
    select(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    // setTimeout(() => this.init(), 1500);
    setInterval(() => {
      this.currentIndex < this.imgs.length
        ? this.currentIndex++
        : (this.currentIndex = 0);
      // for (let i in this.$refs.imgs) {
      //   this.$refs.imgs[i].style.left =
      //     toString(
      //       parseFloat(this.$refs.imgs[i].style.left) -
      //         parseFloat(this.$refs.imgs[i].style.width)
      //     ) + "px";
      //   i++;
      // }
      // console.log(
      //   parseFloat(this.$refs.imgs[0].style.left),
      //   this.$refs.imgs[1].style.left,
      //   this.$refs.imgs[0].style,
      //   this.$refs.imgs[0].style.width
      // );
      // console.log(this.$refs.imgs[0].style.left, this.$refs.imgs[0].width);
    }, 2000);
  },
};
</script>

<style scoped>
.swiper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  width: 100vh;
  /* background-color: #fc5ec7; */
  line-height: 300px;
  /* text-align: center; */
}

.swiper .display-area {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.swiper .display-area .img-list {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 300px;
  width: 1000%;
  padding: 0;
  margin: 0;
}

.swiper .img {
  position: absolute;
  /* left: 0; */
  float: left;
  width: 100vw;
  height: 300px;
}

.swiper .promo-nav {
  display: flex;
  height: 18;
  position: absolute;
  z-index: 10;
  left: 50vw;
  bottom: 15px;
  transform: translate(-50%, 0);
  background-color: rgba(247, 243, 243, 0.123);
  border-radius: 7px;
  /* text-align: center; */
  line-height: 14px;
  margin: 0;
  padding: 0;
}

.promo-nav .point {
  /* float: left; */
  flex: 1;
  list-style: none;
  margin: 4px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
}

.swiper .promo-nav .active {
  background-color: #ff5000;
}
</style>