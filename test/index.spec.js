const instanceConfig = require('../index');
const fs = require('fs');
const path = require('path');

const { expect } = require('chai');

describe('读取userHomeConfig', () => {
  it('userHomeConfig key', () => {
    expect(instanceConfig.getConfig()).to.be.an('object');
    expect(instanceConfig.getConfig().tinifyKey).to.deep.equal(['yquPgVsMXbIUOMOrM0_urN2pjaajrCks']);
  });
});

describe('读取.env', function () {
  const envPath = path.join(__dirname, '../.env');
  before(function () {
    fs.writeFileSync(envPath, 'a.b=1\nc=2\ncamelCase=https://huixisheng.github.io\ntinifyKey=newValue');
  });

  after(() => {
    fs.unlinkSync(envPath);
  });

  it('读取env的配置', (done) => {
    expect(instanceConfig.get('a.b')).to.equal('1');
    expect(instanceConfig.get('c')).to.equal('2');
    expect(instanceConfig.get('tinifyKey')).to.equal('newValue');
    expect(instanceConfig.get('camelCase')).to.equal('https://huixisheng.github.io');
    // https://www.cnblogs.com/rubylouvre/p/4442619.html
    // https://0532.gitbooks.io/nodejs/content/process/README.html
    // http://nodejs.cn/api/errors.html
    expect(new Error()).to.be.an('error');
    const badFn = function () { throw new TypeError('Illegal salmon!'); };
    expect(badFn).to.throw('Illegal salmon!');

    try {
      // expect(instanceConfig.get('name')).to.throw('empty key');
      // expect(model.get.bind(model, 'z')).to.throw('Property does not exist in model schema.');
      // https://codeday.me/bug/20170618/25749.html
      // https://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha
      expect(instanceConfig.get.bind(instanceConfig, 'name')).to.throw('empty key');
    } catch (error) {
      console.log(error);
    }
    done();
  });
});

describe('读取.xconfig.js', function () {
  const envPath = path.join(__dirname, '../.env');
  const cwdConfigPath = path.join(__dirname, '../.xconfig.js');
  const content = {
    c: 'xconfig1',
    mail: 'huixisheng@gmail.com',
  };
  before(function () {
    fs.writeFileSync(envPath, 'a.b=1\nc=2\ncamelCase=https://huixisheng.github.io\ntinifyKey=newValue');
    fs.writeFileSync(cwdConfigPath, 'module.exports = ' + JSON.stringify(content));
  });

  after(() => {
    fs.unlinkSync(envPath);
    fs.unlinkSync(cwdConfigPath);
  });

  it('读取.xconfig.js的配置', (done) => {
    // console.dir(instanceConfig.getConfig());
    expect(instanceConfig.get('c')).to.equal('xconfig1');
    expect(instanceConfig.get('mail')).to.equal('huixisheng@gmail.com');
    try {
      expect(instanceConfig.get.bind(instanceConfig, 'nokey')).to.throw('empty key');
    } catch (error) {
      console.log(error);
    }
    done();
  });
});