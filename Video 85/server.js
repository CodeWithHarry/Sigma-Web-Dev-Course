var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)