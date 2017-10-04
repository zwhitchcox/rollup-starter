import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    json(),
    babel(),
    serve({
      historyApiFallback: true,
      contentBase: ['dist', 'static'],
    }),
    livereload(),
  ]
}
