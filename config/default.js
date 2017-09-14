module.exports = {
  urlAssets: '',
  urlUpload: '',
  pathAssets: '',
  mapCosmeapi: 'YOUR_PROJECT/cosmeapi/Modules/Api/Assets/',
  qiniuDomain: '',
  tinifyKey: ['yquPgVsMXbIUOMOrM0_urN2pjaajrCks'],
  cndAssets: 'YOUR_PROJECT/cdnAssets',

  qiniuConfig: {
      accessKey: "",
      secretKey: "",
      bucket: "cosmeapp",
      domains: {
        'default': '',
        //你的七牛域名
        'https': '',
        //你的HTTPS域名
        'custom': '',
        //你的自定义域名
      }
  },

  // 是否考虑去除
  // server: {
  //   // ref https://github.com/spmjs/grunt-scp
  //   online: {
  //     host: '',
  //     username: '',
  //     port: '',
  //     password: '',

  //     rootProject: 'SERVER_HTDOCS/cosmeapp',
  //     rootStatic: 'SERVER_HTDOCS/cosmeapp/static',
  //     rootPublic: 'SERVER_HTDOCS/cosmeapp/public',
  //     rootCosmeapi: 'SERVER_HTDOCS/cosmeapp/cosmeapi',
  //     fisUploadUrl: ''
  //   },
  //   local: {
  //     host: '',
  //     username: '',
  //     port: '',
  //     password: '',

  //     rootProject: 'YOUR_PROJECT',
  //     rootStatic: 'YOUR_PROJECT/static',
  //     rootPublic: 'YOUR_PROJECT/public',
  //     rootCosmeapi: 'YOUR_PROJECT/cosmeapi',
  //     rootCosmeshop: 'YOUR_PROJECT/cosmeshop',
  //     cndAssets: 'YOUR_PROJECT/cdnAssets',
  //     fisUploadUrl: '' // 配合fis3上传资源的地址
  //   }
  // },

  qn: {
    cosmeapp: {
      accessKey: "",
      secretKey: "",
      bucket: "",
      domains: {
        'default': '',
        //你的七牛域名
        'https': '',
        //你的HTTPS域名
        'custom': '',
        //你的自定义域名
      }
    }
  },

  mysql: {
    local: {
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: '',
      port: 3306
    }
  },
  // https://tinypng.com
  tiny: {
    key: [
      // 'aB7sOfKFWxhc15ngTB9_NROojpvap1Q2',
      'yquPgVsMXbIUOMOrM0_urN2pjaajrCks',
      'tTo2C791KlX6O9LZrxa7SZZp9zBoK4v5',
      'EGjiTFGIIu6-q3yKoQXle34daBqLWkFK',
      '7vxSqeVoiXr-1m8XpK6f8vQErrqGdDHd',
      'aB7sOfKFWxhc15ngTB9_NROojpvap1Q2',
      // 'brn2Qb76ZZZG8WA9VzHA3qtG_zxvzDQe',
      'ta8TixnVQfdMQj7F_y4hYJULS2NGNlmL'
    ]
  },
  // 用于发送邮件配置
  nodemailer: {
    auth: {
      user: '',
      pass: ''
    },
  },
}
