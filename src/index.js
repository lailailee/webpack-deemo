// require('./index.css')
require('./index.scss')
console.log('hello webpack!!!!!!!')

if (process.env.NODE_ENV === 'development') {
  console.log('development')
} else {
  console.log('production')
}