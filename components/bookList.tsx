'use client'
import useBooks from '@/app/hooks/useBooks';
import BookRow from './bookRow';
import React from 'react';

const bookListHeader = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price' }
];

const BookList = ({title, selectBook}) => {
  
  const { books, setBooks }= useBooks();

  const addBook = () => {
    setBooks([...books, { id: 0, name: 'Placeholder', price: 0 }])
  };

  return (<div className="mt-4 p-4">
    <div className='mb-3'>
    <button className='float-right bg-transparent text-cadet-blue font-semibold py-2 px-4 border rounded' onClick={addBook}>Add</button>
    </div>
    <span className='font-bold text-lg'>{title}</span>
    <table className="min-w-full mt-4 table-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          {bookListHeader.map((h) => (
            <th
              className="px-4 py-2 border-b text-left font-semibold text-gray-700"
              key={h.key}
            >
              {h.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow book={book} bookListHeader={bookListHeader} selectBook={selectBook} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>)
};

export default BookList;
