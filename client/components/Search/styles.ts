import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const ingredientStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: '.5rem .5rem 0 0',
      padding: '.5rem',
      fontSize: 12,
      color: 'white',
      backgroundColor: theme.palette.primary.light
    }
  })
);
