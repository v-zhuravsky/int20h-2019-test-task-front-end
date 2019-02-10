import React from 'react';
import {
  GridListTile,
  GridList,
} from '@material-ui/core';
import { Photos as PhotosType } from '../../da-layer/models/Photos';

const Photos: React.FC<{items: PhotosType, onClick: Function}> = ({items, onClick}) => (
  <GridList cellHeight={150} cols={3}>
    {items.map((item, index) => (
      <GridListTile key={`photo-${index}`} onClick={() => onClick(item)}>
        <img src={item.url} />
      </GridListTile>
    ))}
  </GridList>
);

export default Photos;