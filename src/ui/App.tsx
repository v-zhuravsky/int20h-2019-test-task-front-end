import React, { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import Filter from './components/Filter';
import Photos from './components/Photos';
import PhotoDialog from './components/PhotoDialog';
import { Photo, Photos as PhotosType } from '../da-layer/models/Photos';
import { PhotosService } from '../bl-layer/services/PhotosService';

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

const photosService = new PhotosService(300);
const filterPhotos = (filter: string): Promise<PhotosType> =>
  photosService.getPhotos(1, filter);

const App: React.FC = () => {
  const [items, setItems] = useState([] as PhotosType);
  const [filter, setFilter] = useState('');
  const [dialogImage, setDialogImage] = useState('');
  useEffect(() => {
    console.log('using effect')
    photosService.getPhotos(1).then(photos => setItems(photos));
  }, []);
  console.log('items: ', items);
  console.log('filter: ', filter);
  console.log('dialogImage: ', dialogImage);
  console.log('______________________-');
  return (
    <>
      <TopBar title="Photos" />
      <div className="content">
        <Filter
          values={emotions}
          onChange={(val: string) => {
            setFilter(val);
            filterPhotos(val).then(photos => setItems(photos));
          }}
          value={filter}
        />
        <Photos
          items={items}
          onClick={(item: Photo) =>
            setDialogImage(photosService.getPhotoUrl(item.url))
          }
        />
      </div>
      <PhotoDialog url={dialogImage} onClose={() => setDialogImage('')} />
    </>
  );
};

export default App;
