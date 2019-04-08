import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axois from 'axios'

Vue.config.productionTip = false
axois.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
