const APIConfig = require('./const');
const http = require('http');
const crypto = require('crypto');
const querystring = require('querystring');
const dateFormat = require('dateformat');
/**
 * 签名算法 以用户秘钥和时间戳作为签名秘钥
 * 将除“signkey”外的所有参数按key进行字典升序排列，
 * 将接口名和排序后的参数(key=value)用&拼接起来，最后用&和用户秘钥拼接。
 *  
 * 例如：
    接口为：/api/method
    参数为：a=1，b=2，c=3
    用户秘钥为：abcdefghijklmnopqrxtuvwxyz
/api/method?a=1&b=2&c=3&timestamp=1384243215&username=test@test.com&ver=4&abcdefghijklmnopqrxtuvwxyz
    将上面生成的字符串进行URLencode转码，把转码后的字符串进行MD5加密，即是signkey。
    URLencode之后：
    %2Fapi%2Fmethod%3Fa%3D1%26b%3D2%26c%3D3%26timestamp%3D1384243215%26username%3Dtest%40test.com%26ver%3D4%26abcdefghijklmnopqrxtuvwxyz
    MD5之后：
    ed8213ee8873e9a83ba14aa16d4606ed
 * @param {any} apiName
 * @param {Object} params
 * @param {any} userKey
 */
function generateSignKey(apiName, params) {
  let result = {
      signKey: '',
      success: true,
      errMsg: ''
    },
    url = '';
  if (typeof params === 'object') {
    url = `${apiName}?${querystring.stringify(params)}&${APIConfig.USERKEY}`;
    result.signKey = crypto
      .createHash('md5')
      .update(encodeURI(url))
      .digest('hex');
  } else {
    result.errMsg = '参数类型错误';
    result.success = false;
  }
  console.log(result);
  return result;
}

/**
 *  为防止重复提交，很多接口都必须传入订单号。
    建议按如下方法生成：
    取系统当前时间按年月日小时分钟秒毫秒，再随机生成6位数相连。生成如：
    20131112170125156123456
    长度在50位以内
 *
 */
function generateOrderNumber() {
  return new Date().getTime() + '' + Math.ceil(Math.random() * 1000000);
}

/**
 *获取系统时间戳
 *时间戳是自 1970 年 1 月 1 日（00:00:00 GMT）至当前时间的总秒数。
  时间戳的有效期为10分钟。如果您的本机时间为准确的“北京时间”，
  可使用本机时间戳，否则可通过接口获取当前服务器的时间戳，以它为基本，开始自动计时。
  时间戳是很多接口必须要传的一个参数。时间戳的目的是为了使一个接口产生的URL在10分钟后失效，提高安全性
 */
function getSysTimestamp(callback) {
  http.get(`${APIConfig.APIHOST}/sys_now?format=${APIConfig.FORMAT}`, function(
    res
  ) {
    callback(res);
  });
}

/**
 * 数据库操作
 *
 * @param {any} pool
 * @param {any} cmdText
 * @param {any} cmdParams
 * @returns
 */
function returnPromise(pool, cmdText, cmdParams) {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query(cmdText, cmdParams, function(err, result) {
            if (err) {
              logger(err);
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
        if (connection) {
          connection.release();
        }
      });
    } catch (err) {
      logger(err);
    }
  });
}

/**
 * 日志输出
 *
 * @param {any} type 日志类型
 * @param {any} msg 日志文本
 */
function logger(type, msg) {
  if (typeof console) {
    var args = Array.prototype.slice.call(arguments);
    if (args.length === 1) {
      msg = type;
      console.log(dateFormat(new Date(), 'yyyy-mm-dd HH:MM:SS') + ':' + msg);
    } else if (args.length > 1) {
      console[type](dateFormat(new Date(), 'yyyy-mm-dd HH:MM:SS') + ':' + msg);
    }
  }
}

/**
 * 查询参数转换
 * 数组转换为字符串
 * @param {any} arr
 */
function convertParams(arr) {
  let str = '(';
  if (Array.isArray(arr) && arr.length) {
    arr.forEach(function(ele, index) {
      if (index !== arr.length - 1) {
        str += '?,';
      } else {
        str += '?)';
      }
    });
  }
  return str;
}

/**
 * 设置请求的响应结果
 *
 * @param {any} data 请求数据
 * @param {any} success 请求结果
 * @param {any} errMsg 错误消息
 */
function setAjaxRes(data, success, errMsg) {
  return {
    data: data,
    success: success,
    errMsg: errMsg || ''
  };
}

generateSignKey('/ll/task_add', {
  a: 1,
  b: 2,
  c: 3,
  timestamp: new Date().getTime(),
  username: APIConfig.USERNAME,
  ver: APIConfig.VERSION
});

module.exports.generateOrderNumber = generateOrderNumber;
module.exports.generateSignKey = generateSignKey;
module.exports.logger = logger;
module.exports.returnPromise = returnPromise;
module.exports.convertParams = convertParams;
module.exports.setAjaxRes = setAjaxRes;
