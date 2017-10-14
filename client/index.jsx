import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';

import { RootContainer } from './components/containers';
import './styles/main.scss';

// Grab the root element
const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    hljs.initHighlightingOnLoad();
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(RootContainer);
