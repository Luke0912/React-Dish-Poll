import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RankSelect from '../RankSelectHandler/RankSelect';
import Typography from '@mui/material/Typography';
import styles from './FoodCard.module.css';

// import axios from 'axios';
// import { configuration } from '../../configs';

export const FoodCard = ({ data }) => {
  const { userId, userRatedDish } = useContext(AuthContext);

  const [rank, setRank] = useState('');

  const renderList = data.map((dish) => {
    const { id, dishName, description, image } = dish;

    const toCard = (payload) => {
      setRank(payload);
    };

    const handleAdd = () => {
      userRatedDish({ points: rank, userId: userId, dish: dish });
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
            <Button size='small' variant='contained' onClick={handleAdd}>
              Rate this Dish
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default FoodCard;
