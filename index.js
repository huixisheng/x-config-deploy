const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const util = require('util');

function getUserHome() {
  var userHomeDir = process.env.HOME || process.env.USERPROFILE;
  if (!userHomeDir) {
    userHomeDir = process.env.HOMEDRIVE + process.env.HOMEPATH;
  }
  return userHomeDir;
}

var configFile = path.join(getUserHome(), '.xconfig/config.js');

function getConfig() {
  var configDefault = path.join(__dirname, 'config/default.js');
  if (!fs.existsSync(configFile)) {
    fse.copySync(configDefault, configFile);
    // console.log('%s 不存在', configFile);
    // process.exit(1);
  }
  return require(configFile)
}

function setConfig(content) {
  if (util.isObject(content)) {
    content = JSON.stringify(content, null, '\t');
  }
  const writeContent = `module.exports = ${content}`
  fs.writeFileSync(configFile, writeContent);
}

exports.getUserHome = getUserHome;
exports.getConfig = getConfig;
exports.setConfig = setConfig;

/**
 * @todo
 * 1. 简单的文档
 * 2. 读取和写入的配置优化
 * 3. 配置文件优化
 * 4. 异常数据的判断
 */