import Button from '@mui/material/Button';

const RateButton = ({ bToCard }) => {
  const pathname = window.location.pathname;

  const handleAdd = () => {
    bToCard();
  };
  return (
    <div>
      <Button size='small' variant='contained' onClick={handleAdd}>
        {pathname === '/PoleResult' ? 'Click to Edit' : 'Click to rate'}
      </Button>
    </div>
  );
};

export default RateButton;
