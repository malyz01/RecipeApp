import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      [theme.breakpoints.down(500)]: {
        fontSize: 12
      }
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
      color: 'white',
      backgroundColor: theme.palette.primary.main
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
