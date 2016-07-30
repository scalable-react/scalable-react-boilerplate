/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import routes from './routes';
import '../styles/styles.scss';

render(routes, document.getElementById('app'));
