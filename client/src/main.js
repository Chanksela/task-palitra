import { createApp } from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

import App from "./App.vue";
import router from "./router";
import "../assets/styles/base.css";

createApp(App).use(router).use(pinia).mount("#app");
