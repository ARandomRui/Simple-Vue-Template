<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "normal"
  },
  disabled: Boolean
})
</script>

<template>
  <button
    :class="['btn', variant]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  color: white;
  background: transparent;
  transition: background 0.2s;
}

.btn:hover {
  background: #383838;
  color: #ffffff;
  transform: translate(1px, -1px);
}

.btn:active {
  background: #494949;
  color: #ffffff;
  transform: translate(0px, 0px);
}

.normal {
  border: 2px solid white;
  color: white;
}

/* You can customize these styles as needed */
.danger {
  border: 2px solid rgb(255, 0, 0);
  color: white;
}
</style>