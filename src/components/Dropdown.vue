<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-select
          v-model="selected"
          :options="options"
          size="sm"
          class="mt-3 w-50"
          sm="6"
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>
              Select An Algorithm
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col></b-col>
      <b-col
        ><b-button class="m-1" @click="$emit('new-array')">
          New Array
        </b-button></b-col
      >
      <b-col
        ><b-button :value="selected" @click="$emit(selected)"
          >Go!</b-button
        ></b-col
      >
      <b-col></b-col>
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
