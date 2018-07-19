import axios from 'axios';
import {Toast} from 'mint-ui';

const http = axios.create({
    // 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
    // 用来区分不同环境，建议使用
    baseURL        : process.env.NODE_ENV == 'development' ? '' : '线上环境',
    // 请求超时时间（毫秒）
    timeout        : 1000,
    // 是否携带cookie信息
    withCredentials: false, // default
});

// 添加一个请求拦截器
http.interceptors.request.use(config => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加一个响应拦截器
http.interceptors.response.use(response => {
    return response;
}, function (error) {
    Toast({
        message  : error.data || '加载失败！',
        iconClass: 'icon icon-success'
    });
    return Promise.reject(error);
});

export default http;