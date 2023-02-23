import styles from './FilterButton.module.scss'

const FilterButton = ({children}) => {
  return (
    <button className={styles.filter_button}>
      {children}
    </button>
  );
};

export  {FilterButton};