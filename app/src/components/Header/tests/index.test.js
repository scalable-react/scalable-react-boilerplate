import Header from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('should render an h1 header element with the specified text', () => {
    const renderedComponent = shallow(
      <Header content="Hello World!" />
    );
    expect(
      renderedComponent
        .find('h1')
        .contains('Hello World!')
    ).toEqual(true);
  });
});
