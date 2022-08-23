import Button from '@mui/material/Button';

const RateButton = ({ bToCard }) => {
  const handleAdd = () => {
    bToCard();
  };
  return (
    <div>
      <Button
        size='small'
        variant='contained'
        onClick={handleAdd}
      >
        Rate This Dish
      </Button>
    </div>
  );
};

export default RateButton;
