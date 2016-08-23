import FeatureFirstContainer from '../index';
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

describe('<FeatureFirstContainer />', () => {
  it('should show a loading indicator while loading', () => {
    const renderedComponent = shallow(
      <FeatureFirstContainer isLoading />
    );
    expect(
      renderedComponent.contains(
        <h1>LOADING...</h1>
      )
    ).toEqual(true);
  });
});
