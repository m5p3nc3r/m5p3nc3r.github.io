import resolve from '@rollup/plugin-node-resolve';
 import { terser } from "rollup-plugin-terser";

export default [{
  input: ['assets/js/sources_mwc.js'],
  output: {
    dir: 'assets/bundle',
    format: 'cjs'
  },
  plugins: [resolve(), terser()]
}, {
  input: ['assets/js/sources_polymer.js'],
  output: {
    dir: 'assets/bundle',
    format: 'cjs'
  },
  plugins: [resolve(), terser()]
}];