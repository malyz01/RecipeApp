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
    // section: {
    //   marginBottom: ''
    // },
    searchHeading: {
      margin: '.8rem 0 .5rem'
    },
    searchInputContainer: {
      textAlign: 'center'
    },
    searchInput: {
      width: '100%',
      boxSizing: 'border-box'
    },
    btnContainer: {
      margin: '1em 0'
    },
    [theme.breakpoints.down(500)]: {
      fontSize: '12'
    }
  })
);
