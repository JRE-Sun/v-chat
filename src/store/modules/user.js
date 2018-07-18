// import { getUserInfo, getUserSaleIncome } from '@v2/api/user'

const state = {
    uid: 0,
    username: '',
    avatar: '',
    sale: {
        income: 0
    }
}

const getters = {}

const mutations = {
    setUser(state, payload) {
        state.uid = payload.uid
        state.username = payload.username
        state.avatar = payload.avatar
    },
    setSaleIncome(state, payload) {
        state.sale.income = payload.income
    }
}

const actions = {
    getUserInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getUserInfo().then(res => {
                commit('setUser', res.extend)
                resolve(res.extend)
            }).catch(err => reject(err))
        })
    },

    getUserSaleIncome({ commit }) {
        return new Promise((resolve, reject) => {
            getUserSaleIncome().then(res => {
                commit('setSaleIncome', { income: res.extend.total })
                resolve(res.extend)
            }).catch(err => reject(err))
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}