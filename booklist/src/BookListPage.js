import React from 'react';
import NewBookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function BookListPage() {
  return (
    <div className="BookListPage">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default BookListPage;
