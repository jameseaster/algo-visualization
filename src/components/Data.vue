<template>
  <div class="data">
    <div
      class="value-container"
      v-for="(num, index) in numbers"
      v-bind:key="index"
    >
      <div
        class="numbers"
        :style="{ height: num.value + 'px', 'background-color': num.color }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    numbers: Array,
  },
};
</script>

<style scoped>
.data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 260px;
}
.value-container {
  width: 10px;
}
.numbers {
  color: white;
  background-color: dodgerblue;
  width: 5px;
  margin: 2px;
  border-radius: 3px 3px 0px 0px;
}
</style>
