<template>
  <div>
    <button @click="$emit('new-array')" class="btn">New Array</button>
    <button class="btn" @click="$emit('bubble')">Bubble Sort</button>
    <button class="btn" @click="$emit('insertion')">Insertion Sort</button>
    <button class="btn" @click="$emit('selection')">Selection Sort</button>
    <button class="btn" @click="$emit('quick')">Quick Sort</button>
    <button class="btn" @click="$emit('heap')">Heap Sort</button>
    <!-- <button class="btn" @click="$emit('test')">Test</button> -->
    <button class="btn" @click="merge">Merge Sort</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    merge() {
      console.log("Merge Sort");
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
