import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Contributor from '../index';

const person = {
  name: 'Ryan Collins',
  github: 'ryanccollins',
  bio: 'Experienced Software Engineer specializing in implementing cutting-edge ' +
    'technologies in a multitude of domains, focusing on React and Front End.  ' +
    'Weekend Data Scientist and Functional Programmer.',
  avatar: 'https://avatars.githubusercontent.com/u/13810084?v=3',
};

describe('<Contributor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Contributor person={person} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot(); // eslint-disable-line
  });
});
