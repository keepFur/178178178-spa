const util = require('../lib/util');

/**
 *用户注册类
 *
 * @class User
 */
class User {
  constructor(pool) {
    this.pool = pool;
  }
  /**
   *创建用户
   *
   * @param {any} user
   * @memberof Order
   */
  createUser(user) {
    let cmdText = ``;
    let cmdParams = [];
    return util.returnPromise(this.pool, cmdText, cmdParams);
  }

  /**
   *读取用户，支持分页
   *
   * @param {any} query
   * @memberof User
   */
  readUserPage(query) {
    let cmdText = ``;
    let cmdParams = [];
    return util.returnPromise(this.pool, cmdText, cmdParams);
  }

  /**
   *  根据用户ID读取用户信息
   *
   * @param {any} userId
   * @memberof User
   */
  readUserById(userId) {
    let cmdText = ``;
    let cmdParams = [];
    return util.returnPromise(this.pool, cmdText, cmdParams);
  }

  /**
   *   修改用户信息
   *
   * @param {any} user
   * @returns
   * @memberof User
   */
  updateUser(user) {
    let cmdText = ``;
    let cmdParams = [];
    return util.returnPromise(this.pool, cmdText, cmdParams);
  }

  /**
   * 删除用户信息 逻辑删除
   *
   * @param {any} id
   * @memberof User
   */
  deleteUserById(id) {
    let cmdText = ``;
    let cmdParams = [];
    return util.returnPromise(this.pool, cmdText, cmdParams);
  }

  /**
   * 用户登录
   *
   * @param {any} user
   * @memberof User
   */
  loginUser(user) {}
}

module.exports = User;
