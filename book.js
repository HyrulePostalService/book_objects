//All of your book objects are going to be stored in an array, so you’ll need a constructor for books. 

// Then, add a separate function to the script (not inside the constructor) that can take some arguments,

// create a book from those arguments, and store the new book object into an array. 

// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID()
// . 
// This ensures each book has a unique and stable identifier, preventing issues when books are removed or

// rearranged. Your code should look something like this (we’re showing only a basic skeleton without 
// function parameters):



const myLibrary = [];

function Book(title, author, genre, pages, read) {
  // the constructor...
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, genre, pages, read) {
  // take params, create a book then store it in the array
        const newBook = new Book(title, author, genre, pages, read);

        myLibrary.push(newBook);


}

function displayBooks(){
        const bookContainer = document.getElementById('library');
    
            bookContainer.innerHTML = ' ';



      

            const updateBooks = document.getElementById('submit');

            updateBooks.addEventListener('click', function(event){
                event.preventDefault();
                      myLibrary.forEach(element => {
                const bookHolder = document.createElement('div');
                    bookHolder.textContent = `${element.title} by ${element.author} is a ${element.genre} book with
                        ${element.pages} pages and ${element.read}`
                        bookContainer.appendChild(bookHolder);
            });

            })
}



addBookToLibrary('Jar', 'Binks', 'Thriller', 303, true);
displayBooks();