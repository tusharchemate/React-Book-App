const { merge } = require("webpack-merge");
const config = require("./webpack.common");

module.exports = (environment) => {
  const { env } = environment;

  const envConfig = require(`./webpack.${env}.js`);
  const conf = merge(config, envConfig);
  
  return conf;
};
