import { shallow } from 'enzyme';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Navbar from '../index';

describe('<Navbar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Navbar pathname="/" />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
