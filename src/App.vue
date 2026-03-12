<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="page">
    <div class="navbar-row">
      <Navbar />
    </div>

    <div class="main-columns">

      <div class="column">
        <p>Resources</p>
        <ul>
          <li>Money</li>
          <li>Materials</li>
          <li>Settings</li>
        </ul>
      </div>

      <div class="column">
        <RouterView />
      </div>

      <div class="column">
        <p>Extra Info</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar-row {
  flex: 0 0 auto;
}

.main-columns {
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
}

.column {
  flex: 1 1 0;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 1px solid #eee;
}
.column:last-child {
  border-right: none;
}

</style>
