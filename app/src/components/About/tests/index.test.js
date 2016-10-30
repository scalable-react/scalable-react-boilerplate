import About from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<About />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <About />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
