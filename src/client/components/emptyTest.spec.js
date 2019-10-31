// Must have at least one test file in this directory or Mocha will throw an error.

import React from 'react';
import { shallow } from 'enzyme';
import HomePage from "./HomePage";

describe('<HomePage />', () => {
  it('should have a header called \'XML Creator\'', () => {
    const wrapper = shallow(<HomePage/>);
    const actual = wrapper.find('h1').text();
    const expected = 'XML Creator';

    expect(actual).toEqual(expected);
  });
});
