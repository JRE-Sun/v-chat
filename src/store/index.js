import Vue from 'vue'
import Vuex from 'vuex'

import header from './modules/header'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        header,
        user
    }
})

export default store