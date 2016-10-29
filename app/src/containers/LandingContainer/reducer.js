import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  name: null,
  isShowingModal: true,
  contributors: [
    {
      name: 'Ryan Collins',
      github: 'ryanccollins',
      bio: 'Experienced Software Engineer specializing in implementing cutting-edge ' +
        'technologies in a multitude of domains, focusing on React and Front End.  ' +
        'Weekend Data Scientist and Functional Programmer.',
      avatar: 'https://avatars.githubusercontent.com/u/13810084?v=3',
    },
    {
      name: 'Andreas Daiminger',
      github: 'adai183',
      bio: 'I started to code about 2 years ago and have been very ' +
        'focused on developing cutting edge UI components.' +
        'I have a passion for functional programming, and I love creating ' +
        'environments that make it easier for developers to write consistent, testable code.',
      avatar: 'https://avatars.githubusercontent.com/u/13679375?v=3',
    },
  ],
  links: [
    {
      url: 'https://github.com/udacityalumni/alumni-client',
      name: 'Udacity Alumni Web App',
    },
    {
      url: 'https://github.com/RyanCCollins/react-weekly',
      name: 'React Weekly',
    },
    {
      url: 'https://github.com/RyanCCollins/ryancollinsio',
      name: 'RyanCollins.io 3.0',
    },
    {
      url: 'https://github.com/RyanCCollins/corporate-dashboard',
      name: 'Corporate Dashboard',
    },
    {
      url: 'https://github.com/RyanCCollins/restaurant-reviewer',
      name: 'Restaurant Reviewer',
    },
    {
      url: 'https://github.com/RyanCCollins/meetup-event-planner',
      name: 'Meetup Event Planner',
    },
  ],
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CLOSE_MODAL:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
        });
      case types.LOAD_DATA_INITIATION:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
          isLoading: {
            $set: true,
          },
          name: {
            $set: action.name,
          },
        });
      case types.LOAD_DATA_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
