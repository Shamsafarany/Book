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
Book.prototype.info = function(){
    return `${this.title} | ${this.author} | ${this.pages} | ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    const id = generateId();
    const b = new Book(id, title, author, pages, read);
    library.push(b);
}

function generateId(){
    return crypto.randomUUID();
}

let count = 0;
function displayBooks(){
    if(library.length === 0) {
        console.log("No books added!");
        container.innerHTML = "No books added!";
        container.style.padding = "10px";
        container.style.fontSize = "20px";
        container.style.color = "white";
    } else {
        container.innerHTML = "";
        table.classList.add("show");
        container.appendChild(table);
        for(let i = count; i < library.length; i++) {
            const tr = document.createElement("tr");
            const titleTd= document.createElement("td");
            titleTd.innerHTML = library[i].title;
            tr.appendChild(titleTd);
            const authorTd= document.createElement("td");
            authorTd.innerHTML = library[i].author;
            tr.appendChild(authorTd);
            const pagesTd = document.createElement("td");
            pagesTd.innerHTML = library[i].pages;
            tr.appendChild(pagesTd);
            const readTd = document.createElement("td");
            readTd.innerHTML = library[i].read;
            tr.appendChild(readTd);
            const removeTr = document.createElement("button");
            removeTr.classList.add("removeButton");
            removeTr.innerHTML = "Remove Book";
            removeTr.addEventListener("click", () => {
                library.splice(i, 1);
                tr.remove("tr");
            })
            tr.appendChild(removeTr); 
            tbody.appendChild(tr);
            console.log("appended");
        }
        count = library.length;
    }
    
}

//get elements
const add = document.querySelector("#add");
const display = document.querySelector("#display");
const form = document.querySelector("form");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

add.addEventListener("click", () => {
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
})

let title; 
let author; 
let pages;
let read;

form.addEventListener("submit", function(event){
    event.preventDefault();
    const form1 = event.target;
    title = form1.title.value;
    author = form1.author.value;
    pages = form1.pages.value;
    const checkedRadio = document.querySelector('input[name="choice"]:checked');
    if (checkedRadio.value === "yes") {
      read = true;
    } else {
      read = false;
    }
    addBookToLibrary(title, author, pages, read);
    console.log("book added!");
    displayBooks();
    form1.reset();
})


display.addEventListener("click", displayBooks)



