import React from 'react';
import { mount } from 'enzyme';

import App from '../../client/components/App';

test('<App />', () => {
  const expected = 'Recipe appLanding page';
  const wrapper = mount(<App />);
  console.log(Object.keys(wrapper));
  expect(wrapper.text()).toMatch(expected);
});
