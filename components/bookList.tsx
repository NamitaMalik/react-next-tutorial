import BookRow from './bookRow';

const books = [
  { id: 1, name: 'Who moved my cheese!' },
  { id: 2, name: 'Godfather' },
  { id: 2, name: 'Shantaram' },
];

const bookListHeader = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
];

const BookList = () => (
  <>
    <div>List of Books</div>
    <table className="min-w-full table-auto border-collapse border border-gray-200">
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
  </>
);

export default BookList;
