import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { spy } from 'sinon';
import { initialState as landing } from '../reducer';
import Landing from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Landing />', () => {
  it('should render with default props', () => {
    const store = mockStore({ landing });
    const wrapper = shallow(
      <Landing store={store} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
