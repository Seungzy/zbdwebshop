<template>
  <section id="catalog">
    <h2>Product Catalog</h2>

    <div class="catalog-intro">
      <p class="intro-text">Our ice cream does not contain artificial preservatives or additives.</p>
      <p class="intro-question">You can see all our available delicious ice cream flavors here.</p>
    </div>

    <div class="products-grid">
      <div class="product-card">
        <img src="/images/Homemade-Vanilla-Ice-Cream-A22-1-P7270022.jpg" alt="Vanilla Ice Cream" class="product-image" />
        <h3>Vanilla</h3>
        <p class="flavor-type">The Classics!</p>
        <p class="price">₱30.00</p>
      </div>

      <div class="product-card">
        <img src="/images/vegan-chocolate-ice-cream-recipe.jpg" alt="Chocolate Ice Cream" class="product-image" />
        <h3>Chocolate</h3>
        <p class="flavor-type">From rich cocoa</p>
        <p class="price">₱35.00</p>
      </div>

      <div class="product-card">
        <img src="/images/images.jpeg" alt="Strawberry Ice Cream" class="product-image" />
        <h3>Strawberry</h3>
        <p class="flavor-type">Fresh Strawberry</p>
        <p class="price">₱35.00</p>
      </div>

      <div class="product-card">
        <img src="/images/Easy-Mango-Coconut-Ice-Cream_done.png.webp" alt="Mango Ice Cream" class="product-image" />
        <h3>Mango</h3>
        <p class="flavor-type">Tropical dessert blending rich cream with pureed sweet, ripe mangoes</p>
        <p class="price">₱35.00</p>
      </div>

      <div class="product-card">
        <img src="/images/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg" alt="Cookies and Cream Ice Cream" class="product-image" />
        <h3>Cookies and Cream</h3>
        <p class="flavor-type">An ice cream with cookies on</p>
        <p class="price">₱40.00</p>
      </div>

      <div class="product-card">
        <img src="/images/pistachio.jpg" alt="Pistachio Ice Cream" class="product-image" />
        <h3>Pistachio</h3>
        <p class="flavor-type">Earthy Richness</p>
        <p class="price">₱45.00</p>
      </div>

      <div class="product-card">
        <img src="/images/mint%20chocolate.jpg" alt="Mint Chocolate Ice Cream" class="product-image" />
        <h3>Mint Chocolate</h3>
        <p class="flavor-type">Cooling sensation</p>
        <p class="price">₱45.00</p>
      </div>

      <div class="product-card">
        <img src="/images/salted%20caramel.jpg" alt="Salted Caramel Ice Cream" class="product-image" />
        <h3>Salted Caramel</h3>
        <p class="flavor-type">Sweet &amp; Salty</p>
        <p class="price">₱50.00</p>
      </div>
    </div>

    <div class="catalog-footer">
      <RouterLink to="/cart" class="btn-order-now">Order Now</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>