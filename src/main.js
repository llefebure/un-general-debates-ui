import Vue from 'vue'
import App from './App.vue'
import ReactiveSearch from "@appbaseio/reactivesearch-vue";
import BootstrapVue from 'bootstrap-vue'

Vue.use(ReactiveSearch);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  render: h => h(App),
}).$mount('#app')
