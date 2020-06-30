import React from 'react';

import { IProps } from './interface';

const index = ({ sample }: IProps) => {
  return (
    <div
      style={{
        height: '100px',
        background: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {sample.map((x, i) => (
        <div key={i}>
          {x.id}: {x.name}
        </div>
      ))}
    </div>
  );
};

export default index;
