
function Book(title, author, year, pages,  tags) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.inStock = 0;
    this.published = false;
    this.tags = tags;
    this.addOnstock = function(quantity) {
        this.inStock += quantity;
    };
    this.save = function() {
        console.log('Book saved!');
    }


}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 218, ['classic', 'novel', 'literature']);
console.log(book1.inStock);
book1.addOnstock(5);
console.log(book1.inStock);
book1.save();
console.log(book1)