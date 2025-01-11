import currencyFormatter from "@/helpers/currencyFormatter";

const BookRow = ({ bookListHeader, book }) => (
  <tr className="hover:bg-gray-50">
    {bookListHeader.map((header) => (
      <td key={header.key} className="px-4 py-2 border-b">
        {header.key === 'price' ? currencyFormatter.format(book[header.key]) : book[header.key]}
      </td>
    ))}
  </tr>
);

export default BookRow;
