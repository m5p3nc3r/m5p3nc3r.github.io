import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'assets/js/sources.js',
  output: {
    dir: 'assets/bundle',
    format: 'cjs'
  },
  plugins: [resolve()]
};