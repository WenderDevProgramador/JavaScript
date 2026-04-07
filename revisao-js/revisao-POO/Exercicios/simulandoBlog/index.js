const Author = require("./Author");

const jhon = new Author("Jhon Doe");
const post = jhon.writePost("My first post", "This is the content of my first post.");
post.addComment("Alice", "Great post!");
post.addComment("Bob", "Thanks for sharing.");


console.log(jhon);
console.log(post);