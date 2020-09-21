import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Sans'
  },
  palette: {
    primary: {
      main: '#26991C'
    },
    secondary: {
      main: '#6EFF61'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

export default theme;
