module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    next: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            loose: true
          }
        ]
      ]
    },
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true
            },
            loose: true
          }
        ]
      ]
    },
    umd: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'umd',
            loose: true
          }
        ]
      ]
    }
  }
};
