import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// import Vant from 'vant';
import "vant/lib/index.css"

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// Vue.use(Vant);


new Vue({
  render: h => h(App),
}).$mount('#app')
