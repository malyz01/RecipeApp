import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      maxHeight: 100
    },
    recipeDetailContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
);
