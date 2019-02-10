import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Typography,
  GridListTile,
  GridList,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import './app.css';

const emotions = [
  'sadness',
  'neutral',
  'disgust',
  'anger',
  'surprise',
  'fear',
  'happiness',
];
const App: React.FC<{ photos: object[] }> = ({ photos = [] }) => {
  const [items, setItems] = useState(photos);
  const [filter, setFilter] = useState('');
  const [dialogImage, setDialogImage] = useState('');
  useEffect(() => {
    fetch('https://faces.vova-lantsov.com/api/images')
      .then(r => r.json())
      .then(data => setItems(data));
  });
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="filter">Filter</InputLabel>
          <Select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            variant="filled"
            inputProps={{
              name: 'filter',
              id: 'filter',
              fullWidth: true
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {emotions.map(e => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <GridList cellHeight={150} cols={3}>
          {items.map((item, index) => (
            //@ts-ignore
            <GridListTile key={index} onClick={() => setDialogImage(item.url)}>
              //@ts-ignore
              <img src={item.url} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Dialog open={dialogImage !== ''} onClose={() => setDialogImage('')}>
        <DialogContent>
          <img src={dialogImage}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default App;
