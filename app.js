class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
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


function addBookToLibrary() {

}
