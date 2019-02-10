import React, { useEffect, useState } from 'react';

import TopBar from './TopBar';
import Filter from './Filter';
import Photos from './Photos';
import PhotoDialog from './PhotoDialog';
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

const App: React.FC<{ photos: PhotosType }> = ({ photos = [] }) => {
  const [items, setItems] = useState(photos);
  const [filter, setFilter] = useState('');
  const [dialogImage, setDialogImage] = useState('');
  useEffect(() => {
    fetch('https://faces.vova-lantsov.com/api/images')
      .then(r => r.json())
      .then(data => setItems(data));
  });
  console.log(items)
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
