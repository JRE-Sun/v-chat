import Mock from 'mockjs';
Mock.setup({
    timeout: "300－10000"
});
// 首页
Mock.mock("home", {
    "extend|10-20": [{
        "id|+1": 1,
        username: () => Mock.Random.cname(),
        message: () => Mock.Random.cparagraph()
    }]
});

// 聊天页面，聊天数据 
Mock.mock("charPage", {
    "extend|10-20": [{
        aevter: () => Mock.Random.image(),
        self: () => (Mock.Random.boolean() ? 1 : 0),
        message: () => Mock.Random.cparagraph()
    }]
});

// 联系人／好友列表
Mock.mock("mail", {
    "extend|50-100": [{
        "id|+1": 1,
        username: () => Mock.Random.cname(),
        message: () => Mock.Random.cparagraph()
    }]
});