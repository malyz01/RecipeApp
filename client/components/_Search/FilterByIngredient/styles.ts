import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      fontSize: '.7em',
      padding: '.2em .8em'
    }
  })
);

export const sIngredient = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '.8em',
      margin: '.5rem .5rem 1rem 0',
      padding: '.2rem .3rem .2rem .5rem',
      fontWeight: 800,
      letterSpacing: 1.5,
      color: 'white !important',
      backgroundColor: `${theme.palette.primary.main} !important`
    },
    span: {
      textTransform: 'capitalize',
      marginRight: '.5rem'
    },
    icon: {
      cursor: 'pointer'
    }
  })
);
