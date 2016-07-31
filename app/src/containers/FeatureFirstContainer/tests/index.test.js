import FeatureFirstContainer from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { FeatureFirstComponent } from 'components';

describe('<FeatureFirstContainer />', () => {
  it('should render a loading indicator while it loads', () => {
    const component = shallow(
      <FeatureFirstContainer loading />
    );
    expect(
      component.text()
    ).to.contain('LOADING');
  });
  it('should render the feature first component with Udacity logo when done loading', () => {
    const component = shallow(
      <FeatureFirstComponent />
    );
    expect(
      component.find('#udacity-alumni-logo').length
    ).toEqual(1);
  });
});
