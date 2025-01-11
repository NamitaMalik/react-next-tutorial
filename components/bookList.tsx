'use client'
import { useState } from 'react';
import BookRow from './bookRow';

const booksArray = [
  { id: 1, name: 'Who moved my cheese!', price: 200 },
  { id: 2, name: 'Godfather', price: 300 },
  { id: 3, name: 'Shantaram', price: 290 },
];

const bookListHeader = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price' }
];

const BookList = (props) => {
  const [books, setBooks] = useState(booksArray);
  const addBook = () => {
    setBooks([...books, { id: 0, name: 'Placeholder', price: 0 }])
  }
  return (<div className="mt-4 p-4">
    <div className='mb-3'>
    <button className='float-right bg-transparent text-cadet-blue font-semibold py-2 px-4 border rounded' onClick={addBook}>Add</button>
    </div>
    <span>{props.title}</span>
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
          <BookRow book={book} bookListHeader={bookListHeader} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>)
};

export default BookList;
