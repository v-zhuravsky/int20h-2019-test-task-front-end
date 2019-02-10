import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const TopBar: React.FC<{title: string}> = ({title}) => (
  <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" color="inherit" noWrap>
      {title}
    </Typography>
  </Toolbar>
</AppBar>
) 

export default TopBar;
