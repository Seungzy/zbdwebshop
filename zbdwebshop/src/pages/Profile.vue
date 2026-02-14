<template>
  <section id="profile">
    <h2>User Profile</h2>

    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-picture-container">
          <img
            src="/images/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
            alt="Profile Picture"
            class="profile-picture"
          />
        </div>

        <h3>Personal Information</h3>

        <div class="profile-info">
          <div class="info-group"><label>First Name:</label><p>John</p></div>
          <div class="info-group"><label>Last Name:</label><p>Doe</p></div>
          <div class="info-group"><label>Email Address:</label><p>john.doe@gmail.com</p></div>
          <div class="info-group"><label>Mobile Number:</label><p>(123) 456-7890</p></div>
          <div class="info-group"><label>Home Address:</label><p>67 Sampaguita St. Quezon City</p></div>
        </div>
      </div>

      <div class="profile-actions">
        <button class="logout-btn" @click="logout"><span>Logout</span></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
  router.push('/')
}
</script>