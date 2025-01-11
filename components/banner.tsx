import styles from './banner.module.css';

const Banner = (props: { headerText: string }) => {
  return (
    <header className="min-w-full">
      <h1>{props.headerText}</h1>
      <h1>My Blog</h1>
      <h2 className={styles.h2}> Has something for everyone!</h2>
    </header>
  );
};

export default Banner;
