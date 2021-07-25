<template>
  <div class="cartItem">
    <div class="goods" v-if="product">
      <div class="selector">
        <checkButton
          @click.native="checkedChange"
          :isChecked="product.checked"
        ></checkButton>

        <!-- :value="itemInfo" -->
      </div>
      <div class="img">
        <img :src="product.image" alt="" />
      </div>
      <div class="info">
        <div class="title">{{ product.title }}</div>
        <div class="desc">{{ product.desc }}</div>
        <div class="bottom">
          <div class="price left">￥{{ product.price }}</div>
          <div class="count right">
            <div
              class="decrement left-btn"
              :class="{ disclick: product.count <= 1 }"
              @click="countMinus"
            >
              -
            </div>
            <div class="number">&times;{{ product.count }}</div>
            <div class="increment right-btn" @click="countPlus">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "./checkButton";
export default {
  name: "cartItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isChecked: true,
    };
  },
  components: {
    checkButton,
  },
  methods: {
    checkedChange() {
      this.$store.dispatch("checkedChange", this.index);
    },
    countPlus() {
      this.$store.commit("countPlus", this.index);
    },
    countMinus() {
      this.$store.commit("countMinus", this.index);
    },
  },
  updated() {
    console.log(this.product);
  },
};
</script>

<style scoped>
/* .cartItem {
} */
.goods {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title,
.desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.img {
  padding: 5px;
}

.img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.info .desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.bottom {
  display: flex;
  margin-top: 20px;
}

.bottom .price {
  flex: 1;
  color: orangered;
  font-size: 20px;
}

.bottom .count {
  position: relative;
  top: 0;
  left: 0;
  right: 10px;
  flex: 1;
  text-align: center;
  font-weight: 700;
}

.bottom .count .decrement,
.increment {
  float: left;
  height: 21px;
  width: 21px;
  border: 1px solid rgb(197, 194, 194);
  font-size: 20px;
  font-weight: 700;
  background-color: rgb(245, 244, 244);
}

.bottom .count .disclick {
  pointer-events: none;
  color: rgb(214, 213, 213);
  background-color: rgb(246, 248, 248);
}

.left-btn {
  border-radius: 35% 0 0 35%;
}

.right-btn {
  border-radius: 0 35% 35% 0;
}

.bottom .count .number {
  float: left;
  height: 21px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid rgb(197, 194, 194);
  color: rgb(236, 105, 138);
}
</style>