import Vue from "vue";
import Quiz from "./pages/home";
import questions from "./questions";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
