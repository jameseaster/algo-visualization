<template>
  <b-container fluid="sm">
    <b-row align-h="center" class="mt-2" no-gutters>
      <b-col cols="6" md="4" lg="3" align-self="center" fluid>
        <b-form-select v-model="selected" :options="options">
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>
              Select An Algorithm
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
      <b-col cols="auto" align-self="center" class="mx-2"
        ><b-button :value="selected" @click="$emit(selected)"
          >Go!</b-button
        ></b-col
      >
    </b-row>
    <b-row align-h="center" class="mt-2" no-gutters>
      <b-col cols="auto" align-self="center" class="mx-2"
        ><b-button @click="$emit('new-array')">New Array</b-button></b-col
      >
      <b-col cols="auto" align-self="center">
        <b-button v-b-toggle.collapse-1>More Info</b-button></b-col
      >
    </b-row>
    <b-row align-h="center">
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p v-if="selected === null">Pick a sorting algorithm!</p>
          <p v-else class="card-text">Info on {{ selected }} sort to come!</p>
        </b-card>
      </b-collapse>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selected: null,
      options: [
        { value: "bubble", text: "Bubble Sort" },
        { value: "insertion", text: "Insertion Sort" },
        { value: "selection", text: "Selection Sort" },
        { value: "quick", text: "Quick Sort" },
        { value: "heap", text: "Heap Sort" },
        { value: "merge", text: "Merge Sort" },
      ],
    };
  },
  methods: {
    log: function(name) {
      console.log(name);
    },
  },
};
</script>

<style scoped></style>
