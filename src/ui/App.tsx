import React, { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import Filter from './components/Filter';
import Photos from './components/Photos';
import PhotoDialog from './components/PhotoDialog';
import { Photo, Photos as PhotosType } from '../da-layer/models/Photos';

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

// TODO: move it to somewhere else
const getBigImage = (photo: Photo): string => photo.url;
const filterPhotos = (filter: string): PhotosType => [];
const getMockPhotos = (): PhotosType => [{
  url: 'https://www.w3schools.com/w3css/img_lights.jpg',
  emotions: []
}]

const App: React.FC = () => {
  const [items, setItems] = useState(getMockPhotos());
  const [filter, setFilter] = useState('');
  const [dialogImage, setDialogImage] = useState('');
  console.log('itesm: ', items);
  console.log('filter: ', filter);
  console.log('dialogImage: ', dialogImage);
  return (
    <>
      <TopBar title="Photos" />
      <div className="content">
        <Filter
          values={emotions}
          onChange={(val: string) => {
            setFilter(val);
            setItems(filterPhotos(val));
          }}
          value={filter}
        />
        <Photos
          items={items}
          onClick={(item: Photo) => setDialogImage(getBigImage(item))}
        />
      </div>
      <PhotoDialog url={dialogImage} onClose={() => setDialogImage('')} />
    </>
  );
};

export default App;
