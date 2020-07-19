import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Typo from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { sFilterByNutri } from './styles';

import * as queries from '../../store/actions/queries';

const maxVal = {
  Calories: 500,
  Carbs: 200,
  Protein: 100,
  Fat: 100,
  Fiber: 50
};

const Nutrient = (props: PropsFromRedux) => {
  const c = sFilterByNutri();

  const handleSlider = (nutri: string) => (event: any, newValue: number | number[]) => {
    props.setNutriQuery({ [nutri]: newValue as number[] });
  };

  // TODO change sliders to be have a more user friendly experience
  return (
    <div>
      <h3>Nutrional Information</h3>

      <div className={c.sliderMainContainer}>
        {Object.keys(maxVal).map((n, i) => (
          <div className={c.sliderContainer} key={i}>
            <Slider
              color="secondary"
              defaultValue={[0, 0]}
              max={maxVal[n]}
              onChange={handleSlider(n)}
              valueLabelDisplay="auto"
              aria-labelledby={`${n} range`}
            />
            <Typo>{n}</Typo>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatch = { ...queries };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Nutrient);
