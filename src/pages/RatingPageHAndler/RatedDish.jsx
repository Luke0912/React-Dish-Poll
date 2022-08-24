import styles from './RatedDish.module.css';

const RatedDish = () => {
  return (
    <>
      <div className={styles.display}>
        <h5>Polled Dishes</h5>
        <div className={styles.displayLogged}></div>
      </div>
    </>
  );
};

export default RatedDish;
