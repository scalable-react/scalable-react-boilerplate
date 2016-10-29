import LoadingIndicator from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<LoadingIndicator />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LoadingIndicator isLoading />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
