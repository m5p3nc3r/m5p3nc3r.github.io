import resolve from '@rollup/plugin-node-resolve';

export default [{
  input: ['assets/js/sources_mwc.js'],
  output: {
    dir: 'assets/bundle',
    format: 'cjs'
  },
  plugins: [resolve()]
}, {
  input: ['assets/js/sources_polymer.js'],
  output: {
    dir: 'assets/bundle',
    format: 'cjs'
  },
  plugins: [resolve()]  
}];