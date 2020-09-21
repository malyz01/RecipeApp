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
      '& fieldset': {
        borderRight: 'none',
        borderRadius: '5px 0 0 5px'
      },
      '&&:hover fieldset': {
        borderColor: theme.palette.secondary.main
      },
      '&&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '1px'
      }
    },
    addBtn: {
      height: '100%',
      borderRadius: '0 5px 5px 0'
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      padding: '.5rem .5rem',
      margin: '0 .5rem .5rem 0',
      background: theme.palette.primary.main,
      color: 'white'
    },
    ingredientsContainer: {
      flexWrap: 'wrap'
    },
    closeIcon: {
      cursor: 'pointer'
    }
  })
);
