/**
 * header 状态控制
 */

const state = {
    style: {
        background: '#52A9EB'
    },
    leftOptions: {
        showBack: true,
        backText: '返回',
        preventGoBack: false,
    },
    rightOptions: {
        showMore: true
    },
    rightSolt: ''
}

const getters = {}

const mutations = {
    setStyle(state, payload) {
        state.style = payload.style
    },
    setRightSolt(state, payload) {
        state.rightSolt = payload.rightSolt
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}