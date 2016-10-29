import WelcomeModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<WelcomeModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <WelcomeModal />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
