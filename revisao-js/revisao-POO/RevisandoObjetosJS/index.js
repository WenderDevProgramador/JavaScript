const book = {
    title: 'The Great Gatsby',
    author: {
        name: 'F. Scott Fitzgerald',
        nationality: 'American'
    },
    year: 1925,
    pages: 218,
    inStock: 20,
    published: true,
    tags: ['classic', 'novel', 'literature'],
    addOnStock(quantity) {
        this.inStock += quantity;
        
    },
    save: function() {
        console.log('Book saved!');
    }

}

console.log(book.inStock);
book.addOnStock(5)
console.log(book.inStock);
book.save();

