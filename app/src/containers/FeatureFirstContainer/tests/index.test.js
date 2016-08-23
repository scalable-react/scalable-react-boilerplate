import { FeatureFirstContainer } from '../index';
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

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
