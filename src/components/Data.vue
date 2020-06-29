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
}
.value-container {
  width: 8px;
}
.numbers {
  color: white;
  background-color: dodgerblue;
  width: 5px;
  margin: 1px;
}
</style>
