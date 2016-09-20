import { shallow } from 'enzyme';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import LogoImage from '../index';

describe('<Header />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LogoImage
        imageSource="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-alumni-png.png?raw=true"
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
