<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/store">Store</router-link>
    <router-link to="/test">Test</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #222;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>