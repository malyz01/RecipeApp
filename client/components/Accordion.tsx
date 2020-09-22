import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const CustomAccordion: React.FC<Props> = (props) => {
  return (
    <Accordion elevation={3}>
      <AccordionSummary IconButtonProps={{ size: 'small' }} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">{props.summary}</Typography>
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
