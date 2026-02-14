import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Catalog from '../pages/Catalog.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Profile from '../pages/Profile.vue'
import Cart from '../pages/Cart.vue'
import PaymentDelivery from '../pages/PaymentDelivery.vue'
import TransactionConfirmation from '../pages/TransactionConfirmation.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/about', component: About},
        { path: '/catalog', component: Catalog},
        { path: '/contact', component: Contact},
        { path: '/login', component: Login},
        { path: '/signup', component: Signup},
        { path: '/profile', component: Profile},
        { path: '/cart', component: Cart},
        { path: '/payment-delivery', component: PaymentDelivery},
        { path: '/transaction-confirmation', component: TransactionConfirmation},
    ],
})