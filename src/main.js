import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
// import Vant from 'vant';
import "vant/lib/index.css"


//1`创建组件
import vueElement from './components/common/vueElement.vue'
import vueStand from './components/common/vueStand.vue'
import vueVant from './components/common/vueVant.vue'
//2`配置路由
const routes = [
   {path: '/vueElement',component:vueElement},
   {path: '/vueStand',component:vueStand},
   {path: '/vueVant',component:vueVant}
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter)
// Vue.use(Vant);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
