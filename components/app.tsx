import Banner from '@/components/banner';
import BookList from './bookList';

const App = () => {
  return (
    <>
      <Banner> Welcome to React Demo</Banner>
      <BookList title="List of Books" />
    </>
  );
};

export default App;
