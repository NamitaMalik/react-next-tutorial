'use client'

import Banner from '@/components/banner';
import BookList from './bookList';
import Book from './book';
import { useState } from 'react';

const App = () => {
  const [selectedBook, setSelectedBook] = useState();

  const setSelectedBookWrapper = (book) => {
    setSelectedBook(book);
  }
  return (
    <>
      <Banner> My Book Store </Banner>
      {selectedBook ? (<Book book={selectedBook} clearSelection={() => setSelectedBook(undefined)} />) : (<BookList title="List of Books" selectBook={setSelectedBookWrapper} />)
      }

    </>
  );
};

export default App;

/*
When the App component’s state (selectedBook) changes, 
React considers the entire App tree as "dirty" and re-evaluates it. 
Since BookList and BookDetail are children of App, they get re-created, resetting their local states.
*/