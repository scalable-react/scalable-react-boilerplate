import FeatureFirstContainer from '../index';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as featureComponent } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<FeatureFirstContainer />', () => {
  it('renders with default props', () => {
    const store = mockStore({ featureComponent });
    const wrapper = shallow(
      <FeatureFirstContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
