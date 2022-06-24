// CommonJS, every file is module (by dedault)
// Modules - Encapsulated Code (only share minimun)
const names = require('./4-name-constants')
const sayHi = require('./5-sayHi-module')
const data = require('./6-alternative-exporting')

require('./7-mind-grenade')

// sayHi("susan")
// sayHi(names.john)
// sayHi(names.peter)
// console.log(data);
