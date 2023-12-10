import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import "../public/lib/animate/animate.min.css";
import "../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../public/lib/owlcarousel/assets/owl.theme.default.min.css";
import "../bootstrap.min.css";
import "../style.css";

import "../main.js";

createApp(App).use(router).mount('#app')
