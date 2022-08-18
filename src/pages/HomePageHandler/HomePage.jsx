import { useEffect, useState } from 'react';

import FoodCard from '../../components/FoodcardHandler/FoodCard';
import axios from 'axios';
import { configuration } from '../../configs';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await axios
      .get(configuration.BASE_URL.concat('/dishes'))
      .catch((err) => {
        console.log('Err:', err);
      });
    setData(response.data);
  };

  return (
    <>
      <div className={styles.list}>
        <FoodCard data={data}></FoodCard>
      </div>
    </>
  );
};

export default HomePage;
