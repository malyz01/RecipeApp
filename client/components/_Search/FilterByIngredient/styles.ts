import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const ingredientStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      alignItems: 'center',
      margin: '.5rem .5rem 1rem 0',
      padding: '.5rem .8rem',
      fontSize: 14,
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
