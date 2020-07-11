import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

import * as e from '../../enum/spoonacular';
import { getMinMax } from './validate';

const Nutrient = () => {
  const [nutrients, setNutrients] = useState<{}>({});

  const handleSlider = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number[]
    }));
  };

  const handleQuery = () => {
    const queries = getMinMax(nutrients);
  };

  return (
    <div>
      <h3>Nutrional Information</h3>
      <select>
        {Object.values(e.ENutrients).map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
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
  );
};

export default Nutrient;
