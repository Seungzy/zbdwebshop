<template>
  <section id="payment-delivery">
    <h2>Payment &amp; Delivery</h2>

    <div class="payment-container">
      <form @submit.prevent="submit">
        <div class="form-section">
          <h3>Payment Method</h3>
          <label><input type="radio" value="card" v-model="payment" /> Credit/Debit Card</label><br />
          <label><input type="radio" value="paypal" v-model="payment" /> GCash</label>
        </div>

        <div class="form-section" v-show="payment === 'card'">
          <h3>Card Details</h3>
          <input type="text" placeholder="Card Number" :required="payment === 'card'" />
          <input type="text" placeholder="Expiry (MM/YY)" :required="payment === 'card'" />
          <input type="text" placeholder="CVV" :required="payment === 'card'" />
        </div>

        <div class="form-section">
          <h3>Delivery Option</h3>
          <label><input type="radio" value="standard" v-model="delivery" /> Standard Delivery (Free)</label><br />
          <label><input type="radio" value="express" v-model="delivery" /> Express Delivery (P 20)</label>
        </div>

        <div class="cart-actions">
          <RouterLink to="/cart" class="btn">Back to Cart</RouterLink>
          <button type="submit" class="btn pay-order-btn">Pay &amp; Place Order</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const payment = ref('card')
const delivery = ref('standard')

function submit() {
  router.push('/transaction-confirmation')
}
</script>