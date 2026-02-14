<template>
  <section id="login">
    <h2>Login</h2>

    <form class="auth-form" @submit.prevent="login">
      <div class="form-group">
        <label for="login-email">Email Address:</label>
        <input v-model.trim="email" type="email" id="login-email" placeholder="Enter your email address" required />
      </div>

      <div class="form-group">
        <label for="login-password">Password:</label>
        <input v-model="password" type="password" id="login-password" placeholder="Enter your password" required />
      </div>

      <button type="submit" class="submit-btn">Login</button>
    </form>

    <p class="auth-link">
      Don't have an account? <RouterLink to="/signup">Sign up here</RouterLink>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function login() {
  router.push('/')
}
</script>