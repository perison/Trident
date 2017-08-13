// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/** 自定义的主题 */
import '../theme/index.css'
import ElementUI from 'element-ui'
/** 默认主题 */
// import 'element-ui/lib/theme-default/index.css'

//vue滑块
import VueAwesomeSwiper from 'vue-awesome-swiper'
//markdown
import VueSimplemde from 'vue-simplemde'
//vue圆形菜单
import CircleMenu from 'vue-circle-menu'
import axios from 'axios'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

Vue.use(VueLodash, lodash)
Vue.component('CircleMenu', CircleMenu)



Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(VueSimplemde)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
