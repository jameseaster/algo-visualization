<template>
  <b-container class="data" fluid>
    <b-row class="mx-auto" v-for="(num, index) in numbers" v-bind:key="index">
      <div
        class="numbers mx-auto"
        :style="{
          height: num.value + 'px',
          'background-color': num.color,
          border: quantity < 60 ? 'solid 2px #17252a' : 'solid 1px #17252a',
        }"
      ></div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Data",
  props: {
    numbers: Array,
    quantity: Number,
  },
};
</script>

<style scoped>
.data {
  display: flex;
  align-items: flex-end;
  height: 50%;
  max-width: 95%;
}
.numbers {
  flex-grow: 100;
  color: white;
  background-color: dodgerblue;
  border-radius: 5px 5px 0px 0px;
}
</style>
