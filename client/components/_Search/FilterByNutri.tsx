import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Typo from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { sFilterByNutri } from './styles';

import * as e from '../../enum/spoonacular';
import * as queries from '../../store/actions/queries';
import { getMinMax } from './validate';

const defaultVal = [
  ['Calories', [0, 500]],
  ['Carbs', [0, 500]],
  ['Protein', [0, 500]],
  ['Fat', [0, 500]],
  ['Fiber', [0, 500]]
];

const Nutrient = (props: PropsFromRedux) => {
  const c = sFilterByNutri();
  const [nutrients, setNutrients] = useState<{}>({});
  console.log(Object.entries(e.ENutrients));
  useEffect(() => {
    const queries = getMinMax(nutrients);
    props.setQueries(queries);
  }, [nutrients]);

  const handleSlider = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number[]
    }));
  };

  const renderSliders = () => {};

  return (
    <div>
      <h3>Nutrional Information</h3>

      <div className={c.sliderContainer}>
        <div>
          <Slider
            color="secondary"
            defaultValue={[0, 10]}
            max={200}
            onChange={handleSlider('Protein')}
            valueLabelDisplay="auto"
            aria-labelledby="Protein range"
          />
          <Typo>Protein</Typo>
        </div>
        <div>
          <Slider
            color="secondary"
            defaultValue={[0, 10]}
            max={500}
            onChange={handleSlider('Carbs')}
            valueLabelDisplay="auto"
            aria-labelledby="Carbs range"
          />
          <Typo>Protein</Typo>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = { ...queries };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Nutrient);
