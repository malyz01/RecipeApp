import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const indexStyle = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      margin: '0 auto',
      padding: '0 .5em',
      maxWidth: 500,
      minWidth: 300,
      width: '100%',
      boxSizing: 'border-box'
    },
    searchHeading: {
      marginBottom: 0
    },
    searchInputContainer: {
      textAlign: 'center'
    },
    searchInput: {
      width: '100%',
      boxSizing: 'border-box'
    }
  })
);