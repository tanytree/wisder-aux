import nodeResolve from 'rollup-plugin-node-resolve'
import banner from 'rollup-plugin-banner'

import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import json from 'rollup-plugin-json';


const terserPlugin = terser({
  output: {
    ascii_only: true // 仅输出ascii字符
  },
  compress: {
    pure_funcs: ['console.log'] // 去掉console.log函数
  }
})

const plugins = [
  typescript({
    exclude: ['node_modules/**', '**/__tests__/**'],
    typescript: require('typescript')
  }),
  json(),
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  buble({
    objectAssign: 'Object.assign',
    exclude: ['node_modules/**']
  }),

]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]


export default [
  {
    input: 'src/main.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      indent: false,
    },
    external,
    plugins: [
      ...plugins,
      terserPlugin
    ]
  },
  {
    input: 'src/main.ts',
    output: {
      file: pkg.module,
      format: 'es',
      indent: false,
    },
    external,
    plugins: [
      ...plugins,
      terserPlugin
    ]
  },
  {
    input: 'src/main.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      indent: false,
      name: 'Aux',
    },
    external,
    plugins: [
      ...plugins,
      terserPlugin
    ]
  },
  {
    input: 'src/main.ts',
    output: {
      file: pkg.module.replace('.esm', ''),
      format: 'es',
      indent: false,
    },
    external,
    plugins
  },
]
