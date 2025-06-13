import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Animate.css
import "animate.css";

createApp(App).use(store).use(router).mount("#app");
