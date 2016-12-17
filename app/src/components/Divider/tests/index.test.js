import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Divider from '../index';

describe('<Divider />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Divider />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot(); // eslint-disable-line
  });
});
