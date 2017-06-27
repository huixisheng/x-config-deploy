var path = require('path');
var fs = require('fs');

function getUserHome() {
  var userHomeDir = process.env.HOME || process.env.USERPROFILE;
  if (!userHomeDir) {
    userHomeDir = process.env.HOMEDRIVE + process.env.HOMEPATH;
  }
  return userHomeDir;
}

function getConfig() {
  var configFile = path.join(getUserHome(), '.xconfig/.config.js');
  if (!fs.existsSync(configFile)) {
    console.log('%s 不存在', configFile);
    process.exit(1);
  }
  return require(configFile)
}

exports.getUserHome = getUserHome;
exports.getConfig = getConfig;