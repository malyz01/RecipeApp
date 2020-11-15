import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 3em',
      maxWidth: 900,
      margin: '0 auto'
    },
    list: {
      width: 250
    }
  })
);
