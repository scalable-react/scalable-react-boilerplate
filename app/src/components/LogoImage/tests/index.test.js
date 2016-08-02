import LogoImage from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LogoImage />', () => {
  it('should render an image component with a src and an alt set', () => {
    const renderedComponent = shallow(
      <LogoImage />
    );
    expect(renderedComponent.contains(
      <img
        src="https://github.com/RyanCCollins/cdn/raw/master/alumni-webapp/udacity-alumni-small.png?raw=true"
        alt="Udacity Logo"
      />
    )).toEqual(true);
  });
});
