const collection = document.getElementById('collection');
const addBtn = document.getElementById('new-book');

const modalBg = document.getElementById('modal-bg');
const modal = document.getElementById('modal-container');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalPages = document.getElementById('modal-pages');
const modalStatus = document.getElementById('modal-status');
const subBtn = document.getElementById('modal-button');

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
    if (book.status === 'checked') {
        status.setAttribute('checked', true);
    }
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

function clearFields() {
    modalTitle.value = '';
    modalAuthor.value = '';
    modalPages.value = '';
    modalStatus.checked = false;
}

modalBg.addEventListener('click', hideModal);
modalBg.addEventListener('click', clearFields);
addBtn.addEventListener('click', showModal);
subBtn.addEventListener('click', function (e) {
    if (modalStatus.checked) {
        addBook(modalTitle.value, modalAuthor.value, modalPages.value, 'checked');
    } else {
        addBook(modalTitle.value, modalAuthor.value, modalPages.value, 'unchecked')
    }
    createCard(library[library.length - 1]);
    clearFields();
    hideModal();
    e.preventDefault();
});