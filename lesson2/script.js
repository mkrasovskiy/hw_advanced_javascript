class Library {
    #books = [];
    
    constructor(books = []) {
        this.#books = books;
    }
    
    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title) ) {
            throw new Error(`Книга ${title} уже существует`);
        } 
        this.#books.push(title);
        return this.#books;
    }
    
    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книги ${title} нет в библиотеке`);
        }
        this.#books.splice(index, 1);
        return this.#books;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let library = new Library();

console.log(library.allBooks);
library.addBook('Book');
console.log(library.allBooks);
library.addBook('Book1');
console.log(library.allBooks);
// library.addBook('Book1'); 
// console.log(library.allBooks); // проверка на существующею книгу
// library.removeBook('Book2');
// console.log(library.allBooks); // проверка на отсутствующую книгу
library.removeBook('Book1');
console.log(library.allBooks);