'use strict';
const express = require('express');
const session = require('express-session');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');
const util = require('./src/server/lib/util');
const User = require('./src/server/lib/user');
let app = express();
let apiRoutes = app.Router();
// 使用中间件
app.use(
  session({
    secret: `${Math.random(10)}`, //secret的值建议使用随机字符串
    cookie: { maxAge: 60 * 1000 * 60 }, // 过期时间（毫秒）
    proxy: true,
    resave: true,
    saveUninitialized: false,
    rolling: true
  })
);
app.use(cookie());
app.use(express.static('src'));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '15mb'
  })
);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('src', path.join('src'));
// 业务逻辑处理
const user = new User();

// 用户注册
apiRoutes.get('/create_user', function(req, res) {
  try {
    user.createUser(req, res, req.body);
  } catch (error) {
    util.logger(`接口名：create_user,${error}`);
  }
});

// 启动服务
app.listen(8090, function() {
  util.logger('已成功启动服务「8090」。。。');
});
