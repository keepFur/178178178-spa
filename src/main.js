import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import './asserts/css/normalize.css';
import './asserts/css/app.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  // window.scrollTo(0, 0);
});

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
