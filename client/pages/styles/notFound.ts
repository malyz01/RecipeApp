import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 400
    }
  })
);
