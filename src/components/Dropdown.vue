<template>
  <b-container fluid="sm">
    <b-row align-h="center" no-gutters>
      <b-col cols="6" md="4" lg="3" align-self="center" fluid>
        <b-form-select v-model="selected" :options="options"> </b-form-select>
      </b-col>
      <b-col cols="auto" align-self="center" class="mx-2">
        <b-button :value="selected" @click="$emit(selected)">Go!</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-2" no-gutters>
      <b-col cols="auto" align-self="center" class="mx-2">
        <b-button @click="$emit('new-array')">Reset</b-button>
      </b-col>
      <b-col cols="auto" align-self="center">
        <b-button v-b-toggle.collapse-1>More Info</b-button>
      </b-col>
    </b-row>
    <Info :algorithm="selected" />
  </b-container>
</template>

<script>
import Info from "./Info";

export default {
  name: "Dropdown",
  components: {
    Info,
  },
  data() {
    return {
      selected: "",
      options: [
        { value: "", text: "Select An Algorithm", disabled: true },
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
