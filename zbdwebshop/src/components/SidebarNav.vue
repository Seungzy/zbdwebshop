<template>
  <nav class="sidebar" :class="{ active: open }">
    <ul class="nav-list">
      <li><RouterLink to="/profile" class="nav-link" @click="$emit('close')">Profile</RouterLink></li>
      <li><RouterLink to="/" class="nav-link" @click="$emit('close')">Home</RouterLink></li>
      <li><RouterLink to="/about" class="nav-link" @click="$emit('close')">About</RouterLink></li>
      <li><RouterLink to="/catalog" class="nav-link" @click="$emit('close')">Catalog</RouterLink></li>
      <li><RouterLink to="/contact" class="nav-link" @click="$emit('close')">Contact Us</RouterLink></li>
      <li><RouterLink to="/cart" class="nav-link order-link" @click="$emit('close')">Order Now</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({ open: Boolean })
defineEmits(['close'])
</script>