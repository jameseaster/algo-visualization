<template>
  <div
    class="container-btn"
    :style="{ 'max-width': this.wideView ? '630px' : '400px' }"
  >
    <!-- <button class="btn" @click="$emit('test')">Test</button> -->
    <button class="btn new-array" @click="$emit('new-array')">New Array</button>
    <button class="btn" @click="$emit('bubble')">Bubble Sort</button>
    <button class="btn" @click="$emit('insertion')">Insertion Sort</button>
    <button class="btn" @click="$emit('selection')">Selection Sort</button>
    <button class="btn" @click="$emit('quick')">Quick Sort</button>
    <button class="btn" @click="$emit('heap')">Heap Sort</button>
    <button class="btn" @click="$emit('merge')">Merge Sort</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    wideView: Boolean,
  },
};
</script>

<style scoped>
.container-btn {
  margin: auto;
}
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
.new-array {
  border: 1px solid white;
  background: #777;
}
.btn:hover {
  background: #777;
}
.new-array:hover {
  background: #444;
}

button:focus {
  background: #072440;
}
</style>
