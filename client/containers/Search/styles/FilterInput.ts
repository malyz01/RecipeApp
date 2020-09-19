import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    section: {
      display: 'flex',
      marginBottom: '1rem'
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      padding: '.5rem 1rem',
      margin: '0 .5rem .5rem 0',
      background: 'green'
    },
    closeIcon: {
      cursor: 'pointer'
    }
  })
);
