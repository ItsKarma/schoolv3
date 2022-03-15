import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyleReset } from 'atomize';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <BrowserRouter>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <App />
    </StyletronProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
