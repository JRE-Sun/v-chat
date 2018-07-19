import http from '@/utils/request';

/**
 * 获取首页全部聊天列表
 */
export const getALLChatList = () => http.post("home");


/**
 * 进入好友聊天页面，获取聊天记录
 * @returns {*}
 */
export const getChatPageinfo = () => http.post("charPage");