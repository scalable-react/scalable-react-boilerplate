import Landing from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as landing } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Landing />', () => {
  it('should render with default props', () => {
    const store = mockStore({ landing });
    const wrapper = shallow(
      <Landing store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
