'use strict';

let CategoryMap = {
    javascript: 'JavaScript',
    nodejs: 'Node.js',
    web: 'Web',
    ops: 'OPS',
    others: 'Others'
};

let PostsMap = [
    { id: 0, title: '千里之行', category: 'others', date: 1457873783 },
    { id: 2, title: 'Git 小技巧', category: 'others', date: 1462776305 },
    { id: 3, title: 'JavaScript 变量作用域、this、闭包', category: 'javascript', date: 1462950925 },
    { id: 4, title: '测试框架：ava', category: 'nodejs', date: 1463365165 },
    { id: 5, title: 'JavaScript Array 常用属性和方法', category: 'javascript', date: 1464072499 },
    { id: 6, title: 'JavaScript 原型、原型链与继承', category: 'javascript', date: 1464141196 },
    { id: 7, title: 'Build Node.Js web server in Docker containers: nodejs+pm2+mongodb+redis', category: 'ops', date: 1468747033 },
    { id: 8, title: 'JavaScript Function、函数声明、函数表达式', category: 'javascript', date: 1479877601 },
    { id: 9, title: 'Promise Magic', category: 'javascript', date: 1480585712 },
    { id: 10, title: 'NPM Magic', category: 'nodejs', date: 1482912684 },
    { id: 11, title: '日志管理工具-Graylog 安装使用', category: 'ops', date: 1484620294 }
];

let GHAddr = 'https://github.com/Dongss/dogs/tree/master/';

exports.CategoryMap = CategoryMap;
exports.PostsMap = PostsMap;
exports.GHAddr = GHAddr;
