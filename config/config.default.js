/* eslint valid-jsdoc: "off" */

'use strict';


module.exports = appInfo => {

  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588846883053_7090';

  // add your middleware config here
  config.middleware = [];
  // 连接mongodb的配置
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/chart_design_api',
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
