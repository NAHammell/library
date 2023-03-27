const collection = document.getElementById('collection');

let library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook(title, author, pages, status) {
    newBook = new Book(title, author, pages, status);
    library.push(newBook);
}

function createCard(book) {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let status = document.createElement('input');
    let remove = document.createElement('button');

    status.setAttribute('type', 'checkbox');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    remove.textContent = 'Remove';

    card.classList.add('bookCard');
    title.classList.add('cardTitle');
    author.classList.add('cardAuthor');
    pages.classList.add('cardPages');
    status.classList.add('cardStatus');
    remove.classList.add('removeBtn');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(remove);

    collection.appendChild(card);
}

addBook('The Hobbit', 'J.R.R. Tolkien', '295', 'Read');
addBook('Test', 'Tester', '200', 'Unread');
addBook('The Hobbit', 'J.R.R. Tolkien', '295', 'Read');

createCard(library[0]);
createCard(library[1]);
createCard(library[2]);
createCard(library[2]);