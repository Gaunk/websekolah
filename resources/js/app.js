
require('./bootstrap');

window.Vue = require('vue').default;
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { CarouselPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(CarouselPlugin)


Vue.component('home-component', require('./components/HomeComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);
Vue.component('navbar-component', require('./components/Navbar.vue').default);



const app = new Vue({
    el: '#app',
});
