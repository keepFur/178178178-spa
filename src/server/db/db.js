const mysql = require('mysql');
const dbconfig = require('./db.config');
const User = require('./db.user');
const Order = require('./db.order');
const pool = mysql.createPool({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database,
  port: dbconfig.port,
  multipleStatements: dbconfig.multipleStatements
});

// 暴露接口
module.exports.dbQuery = {
  user: new User(pool),
  order: new Order(pool)
};
