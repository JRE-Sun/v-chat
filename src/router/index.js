import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
Router.prototype.goBack = function() {
    this.isBack = true;
    window.history.go(-1);
};
export default new Router({
    routes: [{
            path: "/",
            redirect:'/home',
        },
        {
            path: "/home",
            name: "home",
            component: resolve => require(["../page/home"], resolve),
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/home/chatPage",
            name: "chatPage",
            component: resolve => require(["../page/chat-page"], resolve)
        },
        {
            path: "/me",
            name: "me",
            component: resolve => require(["../page/me"], resolve)
        },
        {
            path: "/mail",
            name: "mail",
            component: resolve => require(["../page/mail"], resolve),
        },
        {
            path: '/mail/mailInfo',
            name: 'mailInfo',
            component: resolve => require(["../page/mail-info"], resolve),
        }, 
        {
            path: "/mail/mailInfo/chatPage",
            name: "mailInfoChatPage",
            component: resolve => require(["../page/chat-page"], resolve)
        },
        {
            name: 'mailInfoFriendCircle',
            path: '/mail/mailInfo/friendCircle',
            component: resolve => require(["../page/friend-circle"], resolve)
        },
        {
            path: "/find",
            name: "find",
            component: resolve => require(["../page/find"], resolve),
        },
        {
            name: 'findFriendCircle',
            path: '/find/friendCircle',
            component: resolve => require(["../page/friend-circle"], resolve)
        },
    ]
});