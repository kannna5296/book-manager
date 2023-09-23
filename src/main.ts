import { createApp } from "vue";
import App from "./App.vue";
import { worker } from "./mock/worker";
import routes from "./router/router";
import { vuetify } from "./plugins/vuetify";
// // Vuetify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//   components,
//   directives,
// });

if (import.meta.env.MODE === "mock") {
  console.log("あああ");
  worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
}

createApp(App).use(routes).use(vuetify).mount("#app");
