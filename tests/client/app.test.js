/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../../client/components/App';

test('<App />', () => {
  const expected = 'Recipe appLanding page';
  const wrapper = mount(<App />);
  expect(wrapper.text()).toMatch(expected);
});
