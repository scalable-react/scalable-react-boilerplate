import AppContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as app } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<AppContainer />', () => {
  it('should render with default props', () => {
    const store = mockStore({ app });
    const wrapper = shallow(
      <AppContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
