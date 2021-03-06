import React from 'react';
import {
  Dialog,
  DialogContent,
} from '@material-ui/core';

const PhotoDialog: React.FC<{url: string, onClose: Function}> = ({url, onClose}) => (
  <Dialog open={url !== ''} onClose={() => onClose()}>
    <img src={url} />
  </Dialog>
);

export default PhotoDialog;
