
const Author = require("./Author.js")

const jhon = new Author('Jhon Doe')
const post = jhon.writePost('Titulo Post','Testando novo post obrigado ...')

post.addComment('Wender','Muito bom !')
post.addComment('Antonio','Muito bom !')

console.log(jhon)
console.log(post)
