import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
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
    },
    [theme.breakpoints.down(500)]: {
      fontSize: '12'
    }
  })
);

export const sFilterByNutri = makeStyles((theme: Theme) =>
  createStyles({
    sliderMainContainer: {
      padding: '0 1em',
      display: 'flex',
      justifyContent: 'center'
    },
    sliderContainer: {
      minWidth: 60,
      margin: '0 1em'
    }
  })
);
