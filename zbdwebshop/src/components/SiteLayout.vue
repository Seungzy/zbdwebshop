<template>
  <div>
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />

    <SidebarNav :open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Optional overlay to close on outside click -->
    <div v-if="sidebarOpen" class="overlay" @click="sidebarOpen = false"></div>

    <main>
      <slot />
    </main>

    <footer>
      <p>&copy; 2026 Ice Cream Shop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import AppHeader from './AppHeader.vue'
import SidebarNav from './SidebarNav.vue'

const sidebarOpen = ref(false)

function onDocClick(e) {
  const clickedInsideSidebar = e.target.closest('.sidebar')
  const clickedMenuToggle = e.target.closest('.menu-toggle')
  if (!clickedInsideSidebar && !clickedMenuToggle) sidebarOpen.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<style scoped>
/* If your CSS already has an overlay class you can remove this */
.overlay {
  position: fixed;
  inset: 0;
}
</style>