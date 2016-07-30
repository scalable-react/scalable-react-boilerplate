import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import FeatureFirstComponent from '../index';

describe('<FeatureFirstComponent />', () => {
  it('should render an h1', () => {
    const renderedComponent = shallow(
      <FeatureFirstComponent />
    );
    expect(renderedComponent.contains(
      <div>
        <h1>
          Rocking it Feature First at Udacity Alumni!
        </h1>
      </div>
    )).toEqual(true);
  });
});
