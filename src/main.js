import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { SetupCalendar } from "v-calendar";
import SDropdown from "@storinka/dropdown";
import router from "@/router";
import App from "@/App.vue";

import "@assets/styles/common/index.scss";

import "vue-select/dist/vue-select.css";
import "v-calendar/dist/style.css";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(SetupCalendar, {});
app.use(SDropdown);
app.mount("#app");
