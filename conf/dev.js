import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals'
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      main: true,
      browser: true,
    }),
    cjs(),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],
};
