import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Sans'
  },
  palette: {
    primary: {
      main: '#FF4D4F'
    },
    secondary: {
      light: '#f9eded',
      main: '#ffaaaa'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

export default theme;
