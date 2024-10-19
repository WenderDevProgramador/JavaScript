const Author = require("./Author");

const john = new Author('John Doe')

const post = john.writePost('Título do post','Lorem ipsum dolor sic...')

post.addComment('Wender R Queiroz','Muito bom!')
post.addComment('Lucas ','Interessante')

console.log(john)
console.log(post)