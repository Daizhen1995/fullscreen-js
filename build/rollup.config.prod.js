const path = require('path')
const commnet = require('./comment-helper-es')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const { terser } = require('rollup-plugin-terser')

const inputPath = path.resolve(__dirname, '../src/index.js')
const umdOutputPath = path.resolve(__dirname, '../dist/full-screen.min.js')
const cjsOutputPath = path.resolve(__dirname, '../dist/full-screen-cjs.min.js')
const esOutputPath = path.resolve(__dirname, '../dist/full-screen-es.min.js')

const banner = ['fullscreenJS', 'a js library for fullscreen']
const footer = ['powerd by Zyx Daizhen', 'copyright 2020']

export default {
  input: inputPath,
  output: [
    {
      file: umdOutputPath,
      format: 'umd',
      name: 'fullscreenJS',
      banner: commnet(...banner),
      footer: commnet(...footer),
    },
    {
      file: cjsOutputPath,
      format: 'cjs',
      banner: commnet(...banner),
      footer: commnet(...footer),
    },
    {
      file: esOutputPath,
      format: 'es',
      banner: commnet(...banner),
      footer: commnet(...footer),
    },
  ],
  plugins: [
    resolve(),
    babel(),
    terser({
      compress: {
        pure_funcs: ['console.log'],
      },
    }),
  ],
}
