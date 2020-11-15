import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      color: theme.palette.primary.main
    }
  })
);

const CustomAccordion: React.FC<Props> = (props) => {
  const c = useStyles();

  return (
    <Accordion className={c.mainContainer} elevation={3}>
      <AccordionSummary IconButtonProps={{ size: 'small' }} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">
          <strong>{props.summary}</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

interface Props {
  children: any;
  summary: string;
}

export default CustomAccordion;
