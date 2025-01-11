const BookRow = ({ bookListHeader, book }) => (
  <tr className="hover:bg-gray-50">
    {bookListHeader.map((header) => (
      <td key={header.key} className="px-4 py-2 border-b">
        {book[header.key]}
      </td>
    ))}
  </tr>
);

export default BookRow;
