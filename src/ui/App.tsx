import React, { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import Filter from './components/Filter';
import Photos from './components/Photos';
import PhotoDialog from './components/PhotoDialog';
import { Photos as PhotosType } from '../da-layer/models/Photos';

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

const App: React.FC = () => {
  const [items, setItems] = useState([] as PhotosType);
  const [filter, setFilter] = useState('');
  const [dialogImage, setDialogImage] = useState('');
  useEffect(() => {
    fetch('https://faces.vova-lantsov.com/api/images')
      .then(r => r.json())
      .then(data => setItems(data));
  });
  return (
    <>
      <TopBar title="Photos" />
      <div className="content">
        <Filter values={emotions} onChange={setFilter} value={filter} />
        <Photos items={items} onClick={setDialogImage} />
      </div>
      <PhotoDialog url={dialogImage} onClose={() => setDialogImage('')} />
    </>
  );
};

export default App;
