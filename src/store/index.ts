import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import introduction from './modules/introduction' 
import view from './modules/view' 

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    news,
    introduction,
    view
  }
})
