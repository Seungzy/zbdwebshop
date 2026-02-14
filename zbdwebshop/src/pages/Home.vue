<template>
  <section class="home-hero">
    <h2 class="hero-title">Handcrafted Ice Cream, One Scoop at a Time 🍦</h2>
    <p class="hero-subtitle">
      Welcome to <strong>Serenity Scoops</strong> — creamy classics, fruity favorites, and seasonal specials made to
      brighten your day.
    </p>

    <div class="hero-points">
      <div class="hero-point">
        <h3>Fresh Ingredients</h3>
        <p>No artificial preservatives. It is just simple, tasty goodness.</p>
      </div>
      <div class="hero-point">
        <h3>Made With Care</h3>
        <p>Small-batch flavors for better texture and richer taste.</p>
      </div>
      <div class="hero-point">
        <h3>Fast & Easy Orders</h3>
        <p>Add to cart, checkout, and get your sweet fix.</p>
      </div>
    </div>

    <div class="hero-actions">
      <RouterLink to="/cart" class="btn-order-now">Order Now</RouterLink>
    </div>
  </section>

  <!-- EXISTING: Best Sellers -->
  <section id="flavors">
    <h2>Our Best Sellers</h2>

    <div class="menu-grid">
      <div class="menu-item">
        <img src="/images/Homemade-Vanilla-Ice-Cream-A22-1-P7270022.jpg" alt="Vanilla Ice Cream" />
        <h3>Vanilla</h3>
      </div>

      <div class="menu-item">
        <img src="/images/vegan-chocolate-ice-cream-recipe.jpg" alt="Chocolate Ice Cream" />
        <h3>Chocolate</h3>
      </div>

      <div class="menu-item">
        <img src="/images/images.jpeg" alt="Strawberry Ice Cream" />
        <h3>Strawberry</h3>
      </div>

      <div class="menu-item">
        <img src="/images/Easy-Mango-Coconut-Ice-Cream_done.png.webp" alt="Mango Ice Cream" />
        <h3>Mango</h3>
      </div>

      <div class="menu-item">
        <img src="/images/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg" alt="Cookies and Cream Ice Cream" />
        <h3>Cookies and Cream</h3>
      </div>
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <RouterLink to="/catalog" class="see-more-btn">See More</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-hero {
  text-align: center;
  padding: 30px 16px;
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  margin-bottom: 10px;
}

.hero-subtitle {
  max-width: 780px;
  margin: 0 auto 20px;
  line-height: 1.6;
}

.hero-points {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin: 18px auto 22px;
}

.hero-point {
  padding: 14px;
  border-radius: 10px;
  /* no color specified, keeps your existing theme */
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.hero-point h3 {
  margin: 0 0 6px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>