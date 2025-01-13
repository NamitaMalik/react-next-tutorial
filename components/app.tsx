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
      {selectedBook ? (<Book book={selectedBook} />) : (<BookList title="List of Books" selectBook={setSelectedBookWrapper} />)
      }

    </>
  );
};

export default App;
