import styles from './banner.module.css';

const Banner = ({children}) => {
  return (
    <header className="mt-4 font-bold min-w-full text-center bg-white">
      <h1 className={styles.h1}>{children}</h1>
    </header>
  );
};

export default Banner;
