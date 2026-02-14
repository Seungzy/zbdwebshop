<template>
  <section id="contact-us">
    <h2>Contact Us</h2>
    <p class="contact-intro">We'd love to hear from you! Please fill out the form below.</p>

    <form class="contact-form" @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model.trim="name" type="text" id="name" placeholder="Your full name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model.trim="email" type="email" id="email" placeholder="your.email@example.com" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model.trim="message" id="message" rows="6" placeholder="Enter your message here." required ></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>

    <div class="form-message" :class="{ hidden: !showMsg }">
      Message sent!
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const showMsg = ref(false)

function submit() {
  name.value = ''
  email.value = ''
  message.value = ''
  showMsg.value = true
  setTimeout(() => (showMsg.value = false), 2000)
}
</script>