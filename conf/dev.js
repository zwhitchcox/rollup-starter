import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  name: 'rollup-starter',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ]
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    }),
    css({ output: 'bundle.css' }),
  ],
  sourcemap: true
}
