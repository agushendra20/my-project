import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { router } from './router'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import VueSimpleAlert from "vue-simple-alert";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far);
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
