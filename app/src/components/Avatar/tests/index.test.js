import Avatar from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Avatar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Avatar src="https://github.com/ryanccollins.png" />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
