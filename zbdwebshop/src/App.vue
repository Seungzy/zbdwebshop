<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <SidebarNav :open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- click-outside behavior from your JS (optional) -->
    <div v-if="sidebarOpen" class="overlay" @click="sidebarOpen = false"></div>

    <div class="main-content">
      <RouterView />
    </div>

    <footer>
      <p>&copy; 2026 Ice Cream Shop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import SidebarNav from './components/SidebarNav.vue'


const sidebarOpen = ref(false)
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

footer p {
  margin: 0;
}
</style>