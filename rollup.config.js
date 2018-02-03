const babel = require('rollup-plugin-babel');

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  external: [
    'grid-styled',
    'prop-types',
    'react',
    'styled-components',
    'styled-is',
    'tinycolor2'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
};
