class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = read;
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

//
const submitBook = document.querySelector('#popup-button');
submitBook.addEventListener('click', renderBook);

//Close popup and add book to the library
function renderBook(e) {
  e.preventDefault();
  library.push(getBookDetails());
  hidePopUp();
  addToGallery();
}


// Get the details of the book from user Input
function getBookDetails() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const hasRead = document.getElementById('hasRead').checked;

  let newBook = new Book(title, author, pages, hasRead);
  return newBook;
}

// Add the book to the gallery, reset the form, and clear book info
function addToGallery() {
  library.forEach(book => displayBooks(book));
  updateStats();
  library.splice(0, library.length);
  form.reset();
}



//Make the book appear in the web page
function displayBooks(book) {
  const wrapper = document.querySelector('.book-container');
  const bookDiv = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readStatus = document.createElement('button');
  const remove = document.createElement('button');

  title.textContent = book.title;
  title.classList.add('title');

  author.textContent = book.author;
  author.classList.add('author');

  pages.textContent = book.pages;
  pages.classList.add('pages');

  readStatus.textContent = book.hasRead === true ? 'Read' : 'Not Read';
  readStatus.classList.add('hasRead');
  if (readStatus.textContent === 'Read') {
    readStatus.style.backgroundColor = 'green';
  } else {
    readStatus.style.backgroundColor = 'red';
  }

  remove.textContent = 'Delete';
  remove.classList.add('remove');

  bookDiv.append(title, author, pages, readStatus, remove);
  bookDiv.classList.add('book');
  wrapper.appendChild(bookDiv);

  remove.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    updateStats();
  })
  readStatus.addEventListener('click', toggleStatus);
}

// toggle the read status of the book
function toggleStatus(e) {
  if(e.target.textContent === 'Read') {
    e.target.textContent = 'Not Read';
    e.target.style.backgroundColor = 'red';
  } else {
    e.target.textContent = 'Read';
    e.target.style.backgroundColor = 'green';
  }
  updateStats();
}

//Update the number of books, read books, and unread books
function updateStats() {
  const total_books = document.querySelector('.total-books');
  const total_read = document.querySelector('.total-read');
  const total_unread = document.querySelector('.total-unread');
  const book_container = document.querySelector('.book-container');

  total_books.textContent = book_container.childElementCount;

  let booksArray = Array.from(book_container.children);

  let readCount = 0;
  booksArray.forEach(book => {
    if (book.childNodes[3].textContent === 'Read') {
      readCount++;
    }
    total_read.textContent = readCount;
  });
  total_unread.textContent = total_books.textContent - total_read.textContent;
}
