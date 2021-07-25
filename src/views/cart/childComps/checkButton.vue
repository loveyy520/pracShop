<template>
  <div class="check-button">
    <div :class="{ checked: isChecked }">√</div>
  </div>
</template>

<script>
export default {
  name: "checkButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.check-button {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 0;
}

.checked {
  text-align: left;
  height: 21px;
  width: 21px;
  font-size: 20px;
  font-weight: 700;
  background-color: rgb(247, 91, 91);
  color: #fff;
  border-radius: 50%;
}
</style>