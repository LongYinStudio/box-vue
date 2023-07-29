import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';

Vue.use(Vant);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
