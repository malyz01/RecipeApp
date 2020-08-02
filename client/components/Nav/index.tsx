import React from 'react';
import Typo from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { sIndex } from './styles';

import Drawer from './Drawer';

const index = () => {
  const c = sIndex();

  return (
    <div className={c.mainContainer}>
      <Typo variant="h6">Recipe app</Typo>
      <Drawer />
    </div>
  );
};

export default index;
