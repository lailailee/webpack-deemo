// require('./index.css')
require('./index.scss')

import afn from './a'
afn()

console.log('hello webpack!!!!!!!')

if (process.env.NODE_ENV === 'development') {
  console.log('development')
} else {
  console.log('production')
}