<template>
  <div class="data">
    <div v-for="(num, index) in numbers" v-bind:key="index">
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
.numbers {
  color: white;
  background-color: dodgerblue;
  width: 15px;
  margin: 3px;
}
.comparing {
  background-color: #42b983;
}
.sortedPosition {
  background-color: #a768c4;
}
</style>
