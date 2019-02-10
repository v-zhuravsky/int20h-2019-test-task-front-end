import React from 'react';
import { GridListTile, GridList } from '@material-ui/core';
import { Photos as PhotosType } from '../../da-layer/models/Photos';
import Emotions from './Emotions'

const Photos: React.FC<{ items: PhotosType; onClick: Function }> = ({
  items,
  onClick,
}) => (
  <GridList cellHeight={150} cols={3}>
    {items.map((item, index) => (
      <GridListTile
        key={`photo-${index}`}
        onClick={() => onClick(item)}
        style={{ position: 'relative' }}
      >
        <img src={item.url} />
        <Emotions emotions={item.emotions} className="photo__emotions"/>
      </GridListTile>
    ))}
  </GridList>
);

export default Photos;
