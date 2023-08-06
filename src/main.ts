import { createApp } from "vue";
import App from "./App.vue";
import { worker } from "./mock/worker";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

if (process.env.NODE_ENV === "development") {
  console.log("あああ");
  worker.start();
}

createApp(App).use(vuetify).mount("#app");
