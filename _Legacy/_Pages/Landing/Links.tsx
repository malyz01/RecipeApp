import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { sLinks } from './styles';

const image = {
  url: '/assets/images/food.jpg',
  title: 'Search Recipes',
  width: '100%'
};

export default function ButtonBases(props) {
  const c = sLinks();

  return (
    <div onClick={() => props.history.push('/recipes/search')} className={c.root}>
      <ButtonBase
        focusRipple
        key={image.title}
        className={c.image}
        style={{
          width: image.width
        }}
      >
        <span
          className={c.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`
          }}
        />
        <span className={c.imageBackdrop} />
        <span className={c.imageButton}>
          <Typography component="span" variant="subtitle1" color="inherit" className={c.imageTitle}>
            {image.title}
            <span className={c.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}
