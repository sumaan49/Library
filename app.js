class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = false;
  }
}

let library = [];


// selectors for pop-up
const addBook = document.querySelector('.addBook');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');
const close = document.querySelector('.fa-times');

// event listeners for pop-up
addBook.addEventListener('click', getPopUp);
overlay.addEventListener('click', hidePopUp);
close.addEventListener('click', hidePopUp);


//functions to toggle pop-up
function getPopUp() {
  overlay.style.display = 'block';
  form.style.display = 'block';
}

function hidePopUp() {
  overlay.style.display = 'none';
  form.style.display = 'none';
}

// Add book to library

// Get book details

const submitBook = document.querySelector('#popup-button');
submitBook.addEventListener('click', renderBook);

function getBookDetails() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const hasRead = document.getElementById('hasRead').checked;

  let newBook = new Book(title, author, pages, hasRead);
  return newBook;
}


function addToGallery() {
  library.forEach(book => displayBooks(book));
  library.splice(0, library.length);
  form.reset();
}

function displayBooks(book) {
  const wrapper = document.querySelector('.book-container');
  const bookDiv = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const hasRead = document.createElement('button');
  const remove = document.createElement('button');

  title.textContent = book.title;
  title.classList.add('title');

  author.textContent = book.author;
  author.classList.add('author');

  pages.textContent = book.pages;
  pages.classList.add('pages');

  hasRead.textContent = book.hasRead;
  hasRead.classList.add('hasRead');

  remove.textContent = 'remove';
  remove.classList.add('remove');

  bookDiv.append(title, author, pages, hasRead, remove);
  bookDiv.classList.add('book');
  wrapper.appendChild(bookDiv);

  console.log(bookDiv)


}

function renderBook(e) {
  e.preventDefault();
  library.push(getBookDetails());
  hidePopUp();
  addToGallery();
}