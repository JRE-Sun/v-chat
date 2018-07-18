import http from '@/utils/request';

/**
 * 获取首页全部聊天列表
 */
export const getALLChatList = () => http.post("home");