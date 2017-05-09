/* main.js */

'use strict';


import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import "./style.css";

const rootEl = document.getElementById('root');
const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <OwlCarousel />
    </AppContainer>,
    rootEl
  )
);

render(OwlCarousel);
if (module.hot) module.hot.accept('../components/OwlCarousel2', () => render(OwlCarousel));
