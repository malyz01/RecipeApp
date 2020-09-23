import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: 80,
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 3em'
    },
    iconButton: {
      color: 'white'
    }
  })
);

export const sDrawer = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250
    },
    iconButton: {
      color: 'white'
    }
  })
);
