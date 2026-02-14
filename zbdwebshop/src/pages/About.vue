<template>
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

  <section id="about">
    <h2>About Us</h2>

    <div class="about-content">
      <h3>Welcome to Serenity Scoops</h3>
      <p>
        Serenity Scoops is a premium ice cream shop dedicated to bringing joy and satisfaction to our customers
        with delicious, high-quality ice cream. Since our opening, we have been committed to providing the finest
        flavors made with the best ingredients.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to create memorable experiences through exceptional ice cream products and outstanding
        customer service. We believe every scoop should be a moment of happiness.
      </p>

      <h3>Our Story</h3>
      <p>
        Founded with a passion for quality and flavor, Serenity Scoops has grown into a beloved local favorite.
        We work closely with local suppliers to source the finest ingredients, ensuring that every product we
        serve meets our high standards.
      </p>

      <h3>About the Owner</h3>
      <ul>
        <li>IT student</li>
        <li>Loves gaming and designing simple fun websites</li>
        <li>Handles both the product creation and website development</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>