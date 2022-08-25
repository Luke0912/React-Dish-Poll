import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

export const RankSelect = ({ toCard }) => {
  const [points, setPoints] = useState('');

  const handleChange = (event) => {
    setPoints(event.target.value);
    toCard(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Select Rank</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={points}
          label='Select Rank'
          onChange={handleChange}
        >
          <MenuItem value={30}>Rank 1</MenuItem>
          <MenuItem value={20}>Rank 2</MenuItem>
          <MenuItem value={10}>Rank 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RankSelect;
