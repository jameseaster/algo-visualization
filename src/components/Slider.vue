<template>
  <b-container>
    <b-row
      align-h="center"
      style="width: 300px"
      align-self="center"
      class="mx-auto my-1"
    >
      <v-slider
        v-model="quantity"
        :min="min"
        :max="max"
        label=""
        color="#fff"
        dark
        height="20"
        :step="step"
        @end="$emit('numberChange', quantity)"
        hide-details
      ></v-slider>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      step: 1,
      min: 2,
      max: 82,
      quantity: 42,
    };
  },
};
</script>

<style scoped></style>
