import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './FoodCard.module.css';

export const FoodCard = ({ data }) => {
  const renderList = data.map((dish) => {
    const { id, dishName, description, image } = dish;
    return (
      <>
        <div className={styles.mainDiv}>
          <Card className={styles.cardDiv} key={id}>
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
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default FoodCard;
