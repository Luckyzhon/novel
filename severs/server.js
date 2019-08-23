/*
 * @Author: lyq 
 * @Date: 2019-08-22 10:51:00 
 * @Last Modified by: lyq
 * @Last Modified time: 2019-08-23 08:15:51
 */

const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const apiRouter = require("./routers/apiRouter");

const app = express();

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/DB_project', //连接数据库的路径
    collection: 'sessions' //session存放表格的名字
});

// Catch errors
store.on('error', function (error) {
    console.log(error);
});

//配置sesstion
app.use(session({
    secret: 'keyboard cat', //加密字符串也可以写数组
    name: 'USER', //cookie name
    resave: false, //强制保存session 建议设置成false
    rolling: true, //动态刷新页面cookie存放时间
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //保存时效 1 week
    },
    store: store
}))

//处理http请求
app.use('/api', apiRouter);

//连接数据库
mongoose.connect('mongodb://localhost:27017/DB_project', {
    useNewUrlParser: true
}, (error) => {
    !error && console.log('连接数据库成功');

    // mockData();

    //监听服务
    app.listen(80, (error) => {
        !error && console.log('启动成功');
    });
})