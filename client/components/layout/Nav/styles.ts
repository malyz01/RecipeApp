import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: 80,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 3em'
    },
    iconButton: {
      color: 'white'
    },
    list: {
      width: 250
    }
  })
);
