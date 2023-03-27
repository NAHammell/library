const collection = document.getElementById('collection');
const modalBg = document.getElementById('modal-bg');
const modal = document.getElementById('modal-container');
const addBtn = document.getElementById('new-book');

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

function removeBook(title) {
    if (library.some(book => book.title === title)) {
        library = library.filter(book => book.title !== title);
    }
}

function removeCard(element) {
    element.parentNode.remove();
}

function buildLibrary(arr) {
    for(let i = 0; i < arr.length; i++) {
        createCard(arr[i]);
    }
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

    remove.addEventListener('click', function () {removeBook(title.textContent)});
    remove.addEventListener('click', function () {removeCard(this)});

    collection.appendChild(card);
}

function hideModal() {
    modalBg.style.display = 'none';
    modal.style.display = 'none';
}

function showModal() {
    modalBg.style.display = 'inline';
    modal.style.display = 'flex';
}

modalBg.addEventListener('click', hideModal);
addBtn.addEventListener('click', showModal);

addBook('The Hobbit', 'J.R.R. Tolkien', '295', 'Read');
addBook('Test', 'Tester', '200', 'Unread');

buildLibrary(library);