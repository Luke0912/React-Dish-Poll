import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RankSelect from '../RankSelectHandler/RankSelect';
import RateButton from '../RateButtonHandler/RateButton';
import Typography from '@mui/material/Typography';
import styles from './FoodCard.module.css';

export const FoodCard = ({ data }) => {
  const { userId, userRatedDish, ratedDish } = useContext(AuthContext);
  const [rank, setRank] = useState('');
  const loggedUser = ratedDish.map((e) => e.userId);
  console.log('ratedLength:', loggedUser);

  const renderList = data.map((dish) => {
    const { id, dishName, description, image } = dish;

    const toCard = (payload) => {
      setRank(payload);
    };

    const bToCard = () => {
      if (loggedUser.length >= 3) {
        return alert('cannot add more than 3 dishes');
      }
      if (rank === '') {
        return alert('Please select rank to Poll');
      }
      userRatedDish({ points: rank, userId: userId, dish: dish });
      setRank('');
    };

    return (
      <div className={styles.mainDiv} key={id}>
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

export default FoodCard;
