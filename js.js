const library = [];

//constructor
function Book(id, title, author,pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//add function to prototype
Book.prototype.info = () => {
    return `${this.title} | ${this.author} | ${this.pages} | ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    const id = generateId();
    const b = new Book(id, title, author, pages, read);
    library.push(b);
}

function generateId(){
    return crypto.randomUUID;
}

function displayBooks(){
    for(let i = 0; i < library.size; i++) {
        library[i].info();
    }
}





