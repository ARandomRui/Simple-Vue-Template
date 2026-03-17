<script setup lang="ts">
  import BaseButton from '../components/BaseButton.vue'
  import { useGoldCounterStore } from '../stores/goldcounter'
</script>

<template>
  <h1>Main Page</h1>
  <BaseButton @click="useGoldCounterStore().incrementIntervalCount">Buy Gold Miner</BaseButton>
  <BaseButton variant="normal">Beep</BaseButton>
</template>