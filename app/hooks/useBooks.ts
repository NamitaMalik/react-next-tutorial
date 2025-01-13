import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState<any[]>([]);
  // [] in the below function tells react that run the effect only when component is mounted
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/books');
      const books = await response.json();
      setBooks(books);
    }
    fetchBooks();
  }, []);

  return { books, setBooks };
};

export default useBooks;