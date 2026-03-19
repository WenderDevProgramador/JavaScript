class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.published = false;
        this.inStock = 0;
    }

    publish() {
        this.published = true;
    }
}


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

book1.publish();

console.log(book1);
console.log(book2);

console.log(book1 instanceof Book); // true