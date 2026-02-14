<template>
  <section id="signup">
    <h2>Create Account</h2>

    <form class="auth-form" @submit.prevent="signup">
      <div class="form-row">
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <input v-model.trim="firstName" type="text" id="first-name" placeholder="John" required />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name:</label>
          <input v-model.trim="lastName" type="text" id="last-name" placeholder="Doe" required />
        </div>
      </div>

      <div class="form-group">
        <label for="signup-email">Email Address:</label>
        <input v-model.trim="email" type="email" id="signup-email" placeholder="your.email@example.com" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="signup-password">Password:</label>
          <input v-model="password" type="password" id="signup-password" placeholder="Enter your password" required />
        </div>
        <div class="form-group">
          <label for="signup-confirm-password">Confirm Password:</label>
          <input v-model="confirmPassword" type="password" id="signup-confirm-password" placeholder="Confirm your password" required />
        </div>
      </div>

      <div class="form-group">
        <label for="mobile-number">Mobile Number:</label>
        <input v-model.trim="mobileNumber" type="tel" id="mobile-number" placeholder="(123) 456-7890" required />
      </div>

      <div class="form-group">
        <label for="home-address">Home Address:</label>
        <textarea v-model.trim="homeAddress" id="home-address" placeholder="Enter your home address" rows="3" required />
      </div>

      <button type="submit" class="submit-btn">Create Account</button>
    </form>

    <p class="auth-link">
      Already have an account? <RouterLink to="/login">Login here</RouterLink>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const mobileNumber = ref('')
const homeAddress = ref('')

function signup() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match. Please try again.')
    return
  }
  router.push('/')
}
</script>