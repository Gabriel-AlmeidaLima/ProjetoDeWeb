import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import MovieDetails from '@/components/MovieDetails.vue'
import MoviesList from '@/components/MoviesList.vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.component('movieDetails', MovieDetails)
Vue.component('moviesList', MoviesList)

Vue.filter('formatDate', function(value) {

  if (value) {

    return moment(String(value)).format('LL')

  }

});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')