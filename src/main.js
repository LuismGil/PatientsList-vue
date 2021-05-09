import Vue from 'vue';
import Vuelidate from 'vuelidate';
import moment from 'moment';
import App from './App.vue';

Vue.prototype.moment = moment;

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
