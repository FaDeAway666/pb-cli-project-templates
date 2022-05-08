<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333333",
  },
});

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color"></use>
  </svg>
</template>
