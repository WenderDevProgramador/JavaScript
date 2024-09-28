/*const lodash = require('lodash')
console.log(lodash.isArray([]))
console.log(lodash.kebabCase('Wender Rodolfo De Queiroz'))*/

const str = `{
"name":"Wender",
"job": "Fullstack Developer",
"technologies": ["HTML","CSS", "JavaScript","Python","Git","GitHub"],
"wroking": true,
"yearsOfExperience": 7,
"website": null}`

const obj = JSON.parse(str)
const str2 = JSON.stringify(str)

console.log(obj)
console.log(str2)