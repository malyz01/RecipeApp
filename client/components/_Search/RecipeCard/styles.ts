import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      minHeight: 200,
      margin: '1em 0'
    },
    image: {
      width: '100%'
    },
    recipeDetailContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
);
