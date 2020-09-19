import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    accordion: {
      border: 'none',
      boxShadow: 'none'
    },
    accordionSummary: {
      padding: '0'
    },
    expanded: {
      minHeight: '20px !important',
      margin: '0 !important'
    },
    accordionDetails: {
      padding: '0'
    },
    accordionDetailsContainer: {
      width: '100%'
    },
    button: {
      fontSize: '.7em',
      padding: '.2em .8em'
    }
  })
);
