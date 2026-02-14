<template>
  <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
  <SidebarNav :open="sidebarOpen" @close="sidebarOpen = false" />

  <!-- click-outside behavior from your JS (optional) -->
  <div v-if="sidebarOpen" class="overlay" @click="sidebarOpen = false"></div>

  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import SidebarNav from './components/SidebarNav.vue'

const sidebarOpen = ref(false)
</script>