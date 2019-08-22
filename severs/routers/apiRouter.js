/*
 * @Author: lyq 
 * @Date: 2019-08-22 10:58:28 
 * @Last Modified by: lyq
 * @Last Modified time: 2019-08-22 22:01:15
 */
const express = require('express');
const bodyParser = require('body-parser');
const User = require('../model/User');
const util = require('../util/public');
const proxy = require('http-proxy-middleware');
const api = require('../util/api')
const proxyPost = require('../util/proxy');

//创建路由对象
const router = new express.Router();

//初始化bodyParser
router.use(bodyParser());

//注册
router.post('/regiester', (req, res) => {
    //解构赋值取出客户端传过来的值
    let {username, password} = req.body;

    //查询该用户是否存在
    User.findOne({username})
    .then((result) => {
        if (result) {
            //用户存在
            res.json({message: '手机号已存在,请重新输入',code: -1})
        }else{
            //用户名不存在
            let createDate = util.dateToString(new Date());
            new User({username , password , createDate}).save().then((result) => {
                //注册成功
                res.json({message: '注册成功',code: 0})
            }).catch((err) => {
                console.log(err);
                res.json({message:'未知错误,请联系管理员', code: -2})
            });
        }
    }).catch((err) => {
        console.log(err);
        res.json({message:'未知错误,请联系管理员', code: -2})
    });
})

//登录api
router.post('/login', (req, res)=>{
    //解构赋值取出客户端传过来的值
    let {username, password} = req.body;

    //校验用户名密码
    User.findOne({username,password})
    .then((result) => {
        if (result) {
            //验证账号密码通过
            //设置session保存用户登录信息
            req.session.userinfo = result;
            res.json({message: '登录成功',code: 0});
        }else{
            //未通过
            res.json({message: '用户名或密码错误',code: -1})
        }
    }).catch((err) => {
        console.log(err);
        res.json({message:'未知错误,请联系管理员', code: -2})
    });
})

//首页所有数据
router.get('/homeBooks', (req, res) => {
    res.json(require('../data/home.json'))
})

//精品推荐换一换api
router.use('/jpBooks', proxy({
    target: api.JP_URL,
    changeOrigin: true
}));

//女生美文换一换api
router.use('/nvsBooks', proxy({
    target: api.NVS_URL,
    changeOrigin: true
}));

//男生热文换一换api
router.use('/nsBooks', proxy({
    target: api.NS_URL,
    changeOrigin: true
}));

//分类api
router.use('/classify', proxy({
    target: api.CLASSIFY_URL,
    changeOrigin: true
}));

//排行api
router.use('/ranking', proxy({
    target: api.STANDINGS_URL,
    changeOrigin: true
}));

//女生频道
router.use('/girlChannel', proxy({
    target: api.GIRL_CHANNEL_URL,
    changeOrigin: true
}));

//男生频道
router.use('/boyChannel', proxy({
    target: api.BOY_CHANNEL_URL,
    changeOrigin: true
}));

//精品书单
router.use('/bookList', proxy({
    target: api.BOOK_LIST_URL,
    changeOrigin: true
}));

//书籍详情
router.post('/bookDetails', (req, res)=>{
    proxyPost("walden1.shuqireader.com","/webapi/book/info?_=1566462087920", req.body).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});

//书籍详情换一换
router.use('/bookDetailsChange', proxy({
    target: api.BOOK_DETAILS_URL,
    changeOrigin: true
}));


//向外输出路由
module.exports = router;