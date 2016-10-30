import AboutContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as about } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<About />', () => {
  it('should render with default props', () => {
    const store = mockStore({ about });
    const wrapper = shallow(
      <AboutContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
