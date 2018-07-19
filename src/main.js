import Vue from 'vue';
import App from './App';
import router from './router';
import mock from './mock/index';
import store from './store/index';
import FastClick from 'fastclick';
import 'mint-ui/lib/style.css';
import IScrollView from 'vue-iscroll-view';
import IScroll from 'iscroll';
import rem from './assets/rem';
import './assets/weui.min.css';
import scrollUnique from './assets/scrollUnique';
Vue.prototype.ScrollUnique = scrollUnique;
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(IScrollView, IScroll);
import loading from "./components/loading";
Vue.component('loading', loading);
import fullLoading from "./components/full-loading";
Vue.component('fullLoading', fullLoading);
import delayRender from "./components/delay-render";
Vue.component('delayRender', delayRender);
import scrollView from "./components/scroll-view";
Vue.component('scrollView', scrollView);
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})