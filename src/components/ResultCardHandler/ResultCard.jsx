import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RankSelect from '../RankSelectHandler/RankSelect';
import RateButton from '../RateButtonHandler/RateButton';
import Typography from '@mui/material/Typography';
import styles from './ResultCard.module.css';

const ResultCard = () => {
  const { userId, savedData } = useContext(AuthContext);
  let [rank, setRank] = useState('');

  const renderList = savedData.map((dish) => {
    const { id, dishName, description, image } = dish.dish;
    let { points, uId } = dish;

    const toCard = (payload) => {
      setRank(payload);
    };

    const bToCard = () => {
      if (uId !== userId) {
        return alert('User Can Only Edit Their Dishes');
      }
      if (rank === '') {
        return alert('Please select rank to Poll');
      }
      setRank('')
      points = rank;
    };
    return (
      <div
        className={`${styles.mainDiv} ${uId === userId ? styles.active : ''}`}
        key={id}
      >
        <Card className={styles.cardDiv}>
          <CardMedia
            component='img'
            height='140'
            image={image}
            alt='Dish Name'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {dishName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
            <h3>Points:{points}</h3>
            <h4>User:{uId}</h4>
          </CardContent>
          <CardActions className={styles.CardActions}>
            <RankSelect toCard={toCard}></RankSelect>
            <RateButton bToCard={bToCard}></RateButton>
          </CardActions>
        </Card>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ResultCard;
