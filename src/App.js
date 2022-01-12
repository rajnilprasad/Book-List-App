import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState ([
  {
    bookTitle: "Book1",
    bookAuthor: "John Doe",
    bookIsbn: "9999999999",
    bookId: uuidv4(),
  },
  ]);

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(books.map(book => book.bookId === currentBookId ? 
      {...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn} : book
      )
    );
  };

  const isInputInvalid = () => {
    return (
      title.trim() === "" || author.trim() === "" || isbn.trim() === ""
    );
  };

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  const addBook = () => {
    setBooks([...books, 
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
    },
  ]);
  };

const handleSubmit = e => {
  e.preventDefault();
  clearInputs();
  setCurrentBookId(null);
  if(isInputInvalid()) return;
  !currentBookId ? addBook() : updateBook();
  addBook();
};

const removeBooks = (id) => {
  setBooks(books.filter((book) => book.bookId !== id));
};

const cancelEdit = () => {
  clearInputs();
  setCurrentBookId(null);
}


  return (
    <div className="App">
      <div className="container">
        <Form
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        isbn={isbn}
        setIsbn={setIsbn}
        currentBookId={currentBookId}
        handleSubmit={handleSubmit}
        cancelEdit={cancelEdit}
        />
        <Table books={books} removeBooks={removeBooks} editBook={editBook} />
      </div>
    </div>
  );
};

export default App;
