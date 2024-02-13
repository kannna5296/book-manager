import { createApp } from "vue";
import App from "./App.vue";
import { worker } from "./mock/worker";
import routes from "./router/router";
import { vuetify } from "./plugins/vuetify";
import Notifications from '@kyvg/vue3-notification'

if (import.meta.env.MODE === "mock") {
  worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
}

createApp(App).use(routes).use(vuetify).use(Notifications).mount("#app");
