const db = require('../db/db');
const util = require('./util');
/**
 * 处理用户相关逻辑
 *
 * @class User
 */
class User {
  /**
   *创建用户
   *
   * @param {any} req
   * @param {any} res
   * @param {any} user
   * @memberof User
   */
  createUser(req, res, user) {
    db.dbQuery.user
      .createUser(user)
      .then(data => {
        res.send(util.setAjaxRes({}, true));
      })
      .catch(err => {
        res.send(util.setAjaxRes({}, false, '服务器出错了'));
      });
  }

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @param {any} query 查询参数
   * @memberof User
   */
  readUserPage(req, res, query) {
    db.dbQuery.user
      .readUserPage(query)
      .then(data => {
        res.send(util.setAjaxRes({ total: data.total, rows: data.rows }, true));
      })
      .catch(err => {
        res.send(
          util.setAjaxRes({ total: 0, rows: [] }, false, '服务器出错了')
        );
      });
  }
}

module.exports = User;
