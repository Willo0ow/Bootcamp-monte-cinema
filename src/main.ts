import { createApp } from "vue";
import { createPinia } from "pinia";
import { SetupCalendar } from "v-calendar";
import SDropdown from "@storinka/dropdown";
import Notifications from "@kyvg/vue3-notification";
import router from "@/router";
import App from "@/App.vue";
import i18n from "@/i18n";

import "@assets/styles/common/index.scss";

import "vue-select/dist/vue-select.css";
import "v-calendar/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(SetupCalendar, {});
app.use(SDropdown);
app.use(Notifications);
app.use(i18n);
app.mount("#app");
