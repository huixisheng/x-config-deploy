const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const util = require('util');
const getValue = require('get-value');
// const setValue = require('set-value');
// const userHome = require('user-home');
const debug = require('debug');
const mixin = require('mixin-object');
const is = require('is');
const chalk = require('chalk');
const dotenv = require('dotenv');
const PrettyError = require('pretty-error');

const pe = new PrettyError();
const cwd = process.cwd();
const dirname = __dirname;
function getUserHome() {
  let userHomeDir = process.env.HOME || process.env.USERPROFILE;
  if (!userHomeDir) {
    userHomeDir = process.env.HOMEDRIVE + process.env.HOMEPATH;
  }
  return userHomeDir;
}

const userHomeConfigPath = path.join(getUserHome(), '.xconfig/config.js');
const cwdConfigPath = path.join(cwd, '.xconfig.js');
const cwdEnvPath = path.join(cwd, '.env');
// const debugMode = process.env.xconfig || '';

const HITN_TEXT = {
  init: `请配置相关的文件\n${userHomeConfigPath}\n或者${cwdConfigPath}\n或者${cwdEnvPath}`,
  emptyKey: `请配置相关的文件\n${userHomeConfigPath}\n或者${cwdConfigPath}\n或者${cwdEnvPath}\n%s`,
};

class Config {
  constructor() {
    this.getConfigValues();
    // console.dir(configValues);
  }

  getConfig() {
    return this.getConfigValues();
  }

  getConfigValues() {
    let result = {};
    if (fs.existsSync(userHomeConfigPath)) {
      result = mixin(result, this.require(userHomeConfigPath));
    }
    if (fs.existsSync(cwdEnvPath)) {
      result = mixin(result, this.parseEnv(cwdEnvPath));
    }
    if (fs.existsSync(cwdConfigPath)) {
      result = mixin(result, this.require(cwdConfigPath));
    }
    if (is.empty(result)) {
      console.error(chalk.red(HITN_TEXT['init']));
      process.exit(1);
    }
    return result;
  }

  parseEnv(fielpath) {
    const result = dotenv.config({ path: fielpath }).parsed;
    return result;
  }

  set(key, value) {

  }

  get(key) {
    const configValues = this.getConfigValues();
    const value = getValue(configValues, key);
    if (!value) {
      console.error(chalk.red(HITN_TEXT['emptyKey']), key);
      return '';
      // throw new Error('empty key');
    }
    return value;
  }

  log(text, moduleName) {

  }

  error(text, moduleName) {

  }

  require(filepath) {
    let result;
    try {
      // eslint-disable-next-line
      result = require(filepath);
    } catch (error) {
      console.error(pe.render(error));
    }
    return result;
  }
}

// .xconfig.js   || .env || .xconfig.js
// userHoem/.xconfig/config.js

const instanceConfig = new Config();

module.exports = instanceConfig;
exports.getUserHome = getUserHome;

// function setConfig(content) {
//   if (util.isObject(content)) {
//     content = JSON.stringify(content, null, '\t');
//   }
//   const writeContent = `module.exports = ${content}`
//   fs.writeFileSync(configFile, writeContent);
// }

/**
 * @todo
 * 1. 简单的文档
 * 2. 读取和写入的配置优化
 * 3. 配置文件优化
 * 4. 异常数据的判断
 */