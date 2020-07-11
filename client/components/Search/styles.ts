import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const indexStyle = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      padding: '0 .5em'
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
