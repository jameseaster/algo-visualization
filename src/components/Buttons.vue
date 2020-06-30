<template>
  <div>
    <button @click="$emit('populate-array')" class="btn">New Array</button>
    <button class="btn" @click="$emit('test')">Test</button>
    <button class="btn" @click="$emit('bubble-sort')">Bubble Sort</button>
    <button class="btn" @click="$emit('insertion-sort')">Insertion Sort</button>
    <button class="btn" @click="$emit('selection-sort')">Selection Sort</button>
    <button class="btn" @click="merge">Merge Sort</button>
    <button class="btn" @click="quick">Quick Sort</button>
    <button class="btn" @click="heap">Heap Sort</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {},
  methods: {
    merge() {
      console.log("Merge Sort");
    },
    quick() {
      console.log("Quick Sort");
    },
    heap() {
      console.log("Heap Sort");
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 10px 10px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  background: #555;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
}
.btn:hover {
  background: #777;
}
</style>
