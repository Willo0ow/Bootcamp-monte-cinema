import { createApp } from "vue";
import { createPinia } from "pinia";
import { SetupCalendar } from "v-calendar";
import router from "./router";
import App from "./App.vue";

import "@assets/styles/common/index.scss";

import "vue-select/dist/vue-select.css";
import "v-calendar/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(SetupCalendar, {});
app.mount("#app");
