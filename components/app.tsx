import Banner from '@/components/banner';
import AnotherBanner from '@/components/anotherBanner';
import BookList from './bookList';

const App = () => {
  return (
    <>
      <Banner headerText="This is a banner text, passed via props" />
      <AnotherBanner>
        This is another banner text, passed via children props
      </AnotherBanner>
      <BookList />
    </>
  );
};

export default App;
