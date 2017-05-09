/* main.js */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Demo from './demo';


const rootEl = document.getElementById('root');
const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )
);

render(Demo);
if (module.hot) module.hot.accept('./demo', () => render(Demo));
