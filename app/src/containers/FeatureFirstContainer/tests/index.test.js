import { FeatureFirstContainer } from '../index';
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

// We are testing our react components using
// Airbnb's enzyme
// Checkout https://medium.com/airbnb-engineering/enzyme-javascript-testing-utilities-for-react-a417e5e5090f#.n5bteqyp4
// When testing connected containers, things can be a little trickier
// because you need to mock the store in order to test the components
// in total isolation.
// SEE: http://redux.js.org/docs/recipes/WritingTests.html
function setup() {
  const props = {
    isLoading: true,
  };
  const wrapper = shallow(
    <FeatureFirstContainer isLoading={props.isLoading} />
  );
  return {
    props,
    wrapper,
  };
}

describe('<FeatureFirstContainer />', () => {
  it('should show a loading indicator while loading', () => {
    const {
      wrapper,
    } = setup();
    expect(
      wrapper.contains(
        <h1>LOADING...</h1>
      )
    ).toBe(true);
  });
});
