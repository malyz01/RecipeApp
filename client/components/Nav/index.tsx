import React from 'react';
import Typo from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { sIndex } from './styles';

const index = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <Typo variant="h6">Recipe app</Typo>
      <MoreVertIcon fontSize="small" />
    </div>
  );
};

export default index;
