const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({ test: /\.js$/, loader: "source-map-loader", enforce: "pre" })
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};