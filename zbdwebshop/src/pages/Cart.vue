<template>
  <section id="shopping-cart">
    <h2>Shopping Cart</h2>

    <div class="cart-container">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="price">{{ item.price }}</td>
            <td>
              <input type="number" class="qty" v-model.number="item.qty" :min="item.min" />
            </td>
            <td class="subtotal">{{ formatNumber(item.price * item.qty) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <div class="summary-item">
          <span>Subtotal:</span>
          <span>₱{{ formatNumber(subtotal) }}</span>
        </div>
        <div class="summary-item total">
          <span>Total:</span>
          <span>₱{{ formatNumber(total) }}</span>
        </div>
      </div>

      <div class="cart-actions">
        <RouterLink to="/catalog" class="btn">Continue Browsing</RouterLink>
        <a href="#" class="btn proceed-btn" @click.prevent="proceedToPayment">Proceed to Payment</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const items = reactive([
  { name: 'Vanilla Scoop', price: 30, qty: 1, min: 1 },
  { name: 'Chocolate Scoop', price: 35, qty: 2, min: 1 },
  { name: 'Mango Scoop', price: 35, qty: 1, min: 1 },
  { name: 'Cookies and Cream Scoop', price: 40, qty: 1, min: 1 },
  { name: 'Strawberry Scoop', price: 35, qty: 1, min: 1 },
  { name: 'Pistachio Scoop', price: 45, qty: 0, min: 0 },
  { name: 'Mint Chocolate Scoop', price: 45, qty: 0, min: 0 },
  { name: 'Salted Caramel Scoop', price: 50, qty: 0, min: 0 },
])

const subtotal = computed(() => items.reduce((sum, it) => sum + it.price * it.qty, 0))
const total = computed(() => subtotal.value)

function formatNumber(n) {
  return Number(n).toFixed(2)
}

const router = useRouter()

function proceedToPayment() {
  const cartItems = items
    .filter((it) => it.qty > 0)
    .map((it) => ({
      product: it.name,
      price: it.price,
      quantity: it.qty,
      subtotal: it.price * it.qty,
    }))

  sessionStorage.setItem('cartData', JSON.stringify(cartItems))
  sessionStorage.setItem(
    'cartTotals',
    JSON.stringify({
      subtotal: '₱' + formatNumber(subtotal.value),
      total: '₱' + formatNumber(total.value),
    })
  )

  router.push('/payment-delivery')
}
</script>