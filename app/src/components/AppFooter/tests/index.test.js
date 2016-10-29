import AppFooter from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<AppFooter />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AppFooter />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
