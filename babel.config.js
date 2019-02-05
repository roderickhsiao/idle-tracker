module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true
            }
          }
        ]
      ]
    },
    umd: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'umd'
          }
        ]
      ]
    }
  }
};
