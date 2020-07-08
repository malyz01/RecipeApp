import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

interface IProps {
  name: string;
  getValue: Function;
}

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value: number) {
  return `${value}g`;
}

const RangeSlider = (props: IProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    props.getValue(newValue as number[]);
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {props.name}
      </Typography>
      <Slider
        color="primary"
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default RangeSlider;
