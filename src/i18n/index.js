import { createI18n } from "vue-i18n";

import en from "@/i18n/locale/en";
import pl from "@/i18n/locale/pl";

import datetimeFormats from "@/i18n/datetimeFormats";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  datetimeFormats,
  messages: {
    en,
    pl,
  },
});
