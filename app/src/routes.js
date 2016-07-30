import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import App from '../components/App';
import * as Pages from '../pages/';
import ReduxToastr from 'react-redux-toastr';

const router = (
  <Provider store={store}>
    <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        position="bottom-right"
      />
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Pages.LandingPage} />
          <Route path="*" component={Pages.NotFoundPage} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default router;
