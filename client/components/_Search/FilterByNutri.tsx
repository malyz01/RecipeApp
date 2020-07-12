import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Slider from '@material-ui/core/Slider';

import * as e from '../../enum/spoonacular';
import * as queries from '../../store/actions/queries';
import { getMinMax } from './validate';

const Nutrient = (props: PropsFromRedux) => {
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

  return (
    <div>
      <h3>Nutrional Information</h3>
      <select>
        {Object.values(e.ENutrients).map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
      <div style={{ padding: '0 1rem' }}>
        <Slider
          color="secondary"
          defaultValue={[0, 10]}
          max={200}
          onChange={handleSlider('Protein')}
          valueLabelDisplay="auto"
          aria-labelledby="Protein range"
        />
        <Slider
          color="secondary"
          defaultValue={[0, 10]}
          max={500}
          onChange={handleSlider('Carbs')}
          valueLabelDisplay="auto"
          aria-labelledby="Carbs range"
        />
      </div>
    </div>
  );
};

const mapDispatch = { ...queries };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Nutrient);
