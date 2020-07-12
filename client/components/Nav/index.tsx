import React from 'react';
import Typo from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { sIndex } from './styles';

const index = () => {
  const c = sIndex();
  const handleClick = () => {
    alert('add functionality');
  };

  return (
    <div className={c.mainContainer}>
      <Typo variant="h6">Recipe app</Typo>
      <IconButton className={c.iconButton}>
        <MoreVertIcon onClick={handleClick} />
      </IconButton>
    </div>
  );
};

export default index;
