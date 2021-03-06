import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import router from './router'
import store from './store'

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vue app', // app name registered
    entry: '//localhost:9000',
    container: '#microApp',
    activeRule: '/sub_vue',
    props: {
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  },
  {
    name: 'react app',
    entry: '//localhost:3000',
    container: '#microApp',
    activeRule: '/sub_react',
    props: {
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  },
])

//启动应用
start();

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');