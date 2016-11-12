import WelcomeModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import fields from './mocks';

describe('<WelcomeModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <WelcomeModal
        isVisible={false}
        onClose={e => e}
        onSubmit={e => e}
        {...fields}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
