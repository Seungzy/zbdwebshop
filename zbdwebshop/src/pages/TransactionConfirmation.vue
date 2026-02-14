<template>
  <section id="transaction-confirmation">
    <h2>Order Confirmed!</h2>
    <p class="confirmation-message">Thank you for your order. Your e-receipt is below.</p>

    <div class="receipt-container">
      <div class="receipt-header">
        <h3>SERENITY SCOOPS</h3>
        <p>Order Receipt</p>
      </div>

      <div class="receipt-content">
        <div class="receipt-section">
          <h4>Order Information</h4>
          <p><strong>Order ID:</strong> <span>#SS2026001</span></p>
          <p><strong>Date:</strong> <span>{{ orderDate }}</span></p>
          <p><strong>Time:</strong> <span>{{ orderTime }}</span></p>
        </div>

        <div class="receipt-section">
          <h4>Order Items</h4>
          <table class="receipt-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in receiptRows" :key="row.product">
                <td>{{ row.product }}</td>
                <td>{{ row.quantity }}x</td>
                <td>₱{{ formatNumber(row.price) }}</td>
                <td>₱{{ formatNumber(row.subtotal) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="receipt-section receipt-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>{{ totals.subtotal }}</span>
          </div>
          <div class="summary-row">
            <span>Delivery Fee:</span>
            <span>₱50.00</span>
          </div>
          <div class="summary-row total">
            <span>Total Amount:</span>
            <span>{{ computedTotal }}</span>
          </div>
        </div>

        <div class="receipt-footer">
          <p>Thank you for your transaction. We hope you enjoy your order!</p>
          <p>For inquiries, please contact us at support@serenityscoops.com</p>
        </div>
      </div>

      <div class="receipt-actions">
        <RouterLink to="/" class="btn btn-secondary">Back to Home</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const receiptRows = ref([])
const totals = ref({ subtotal: '₱0.00', total: '₱0.00' })

const orderDate = ref('')
const orderTime = ref('')

function formatNumber(n) {
  return Number(n).toFixed(2)
}

const computedTotal = computed(() => {
  const subtotalAmount = parseFloat((totals.value.subtotal || '₱0.00').replace('₱', '')) || 0
  return '₱' + subtotalAmount.toFixed(2)
})

onMounted(() => {
  receiptRows.value = JSON.parse(sessionStorage.getItem('cartData') || '[]')
  totals.value = JSON.parse(sessionStorage.getItem('cartTotals') || '{"subtotal":"₱0.00","total":"₱0.00"}')

  const now = new Date()
  orderDate.value = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  orderTime.value = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
})
</script>

   