<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "@/components/content/maintabbar.vue";

export default {
  name: "App",
  components: {
    maintabbar,
  },
  activated() {},
  deactivated() {},
};
</script>

<style>
/* @import "assets/css/base.css"; */
</style>
