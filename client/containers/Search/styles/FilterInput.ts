import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%'
    },
    section: {
      display: 'flex',
      marginBottom: '1rem'
    },
    inputContainer: {
      justifyContent: 'space-between'
    },
    input: {
      maxHeight: 40,
      borderRight: 'none'
    },
    addBtn: {
      height: '100%'
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      padding: '.5rem 1rem',
      margin: '0 .5rem .5rem 0',
      background: theme.palette.primary.main
    },
    closeIcon: {
      cursor: 'pointer'
    }
  })
);
