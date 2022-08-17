import { createApp } from "vue";
import { createPinia } from "pinia";
import { SetupCalendar } from "v-calendar";
import App from "./App.vue";

import "vue-select/dist/vue-select.css";
import "v-calendar/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(SetupCalendar, {});
app.mount("#app");
