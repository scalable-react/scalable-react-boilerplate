import Divider from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Divider />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Divider />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
