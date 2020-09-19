import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Sans'
  },
  palette: {
    primary: {
      main: '#C8E27C'
    },
    secondary: {
      main: blueGrey[900]
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

export default theme;
