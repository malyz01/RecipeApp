import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import * as queries from '../../store/actions/queries';

const FilterByIngredient: React.FC<Props> = (props) => {
  return (
    <Accordion elevation={3}>
      <AccordionSummary IconButtonProps={{ size: 'small' }} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">{props.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

const mapDispatch = { ...queries };

const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  children: any;
  summary: string;
}

export default connector(FilterByIngredient);
