import { AuthContext } from '../../contexts/AuthContext';
import ResultCard from '../../components/ResultCardHandler/ResultCard';
import styles from './RatedDish.module.css';
import { useContext } from 'react';

const RatedDish = () => {
  const { userId } = useContext(AuthContext);
  return (
    <>
      <div className={styles.display}>
        <h1>Polled Dishes</h1>
        <h3>
          User : {userId} is currently Logged-in If you have Polled a Dish It is
          highlighted{' '}
        </h3>
        <div className={styles.displayLogged}>
          <ResultCard></ResultCard>
        </div>
      </div>
    </>
  );
};

export default RatedDish;
