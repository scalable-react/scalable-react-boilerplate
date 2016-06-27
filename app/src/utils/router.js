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
          {/* Examples of routes here.
          <Route path="/beautiful" component={Containers.Beautiful} />
          <Route path="/blog" name="PostListView" component={Containers.PostListView} />
          <Route path="/blog/posts/:postId" name="SinglePostView" component={Containers.SinglePostView} />
         */}
          <Route path="*" component={Pages.NotFoundPage} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default router;
