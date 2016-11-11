import About from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

const links = [
  {
    url: 'https://github.com/udacityalumni/alumni-client',
    name: 'Udacity Alumni Web App',
  },
  {
    url: 'https://github.com/RyanCCollins/react-weekly',
    name: 'React Weekly',
  },
];

describe('<About />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <About links={links} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
