<template>
    <header class="header">
        <div class="header-content">
            <button class="menu-toggle" @click="$emit('toggle-sidebar')">☰</button>
            <RouterLink to="/" class="logo-title">
                <div class="logo">
                    <img src="/images/ice-cream-logo.png" alt="Serenity Scoops logo" />
                </div>
                <h1>Serenity Scoops</h1>
            </RouterLink>

            <div class="auth-buttons">
                <RouterLink to="/cart" class="header-btn order-btn">Order Now</RouterLink>
                <RouterLink to="/profile" class="header-btn profile-btn">Profile</RouterLink>
                <RouterLink to="/login" class="header-btn login-btn">Login</RouterLink>
                <RouterLink to="/signup" class="header-btn signup-btn">Sign Up</RouterLink>
            </div>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>