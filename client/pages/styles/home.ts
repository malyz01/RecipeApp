import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      margin: '0 auto',
      padding: '2rem .5em',
      maxWidth: 500,
      minWidth: 300,
      width: '100%'
    },
    section: {
      marginBottom: '1.5rem'
    },
    searchContainer: {
      display: 'flex'
    },
    searchInput: {
      width: '100%',
      boxSizing: 'border-box'
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
    searchHeading: {
      margin: '.8rem 0 .5rem'
    },

    [theme.breakpoints.down(500)]: {
      fontSize: '12'
    }
  })
);
