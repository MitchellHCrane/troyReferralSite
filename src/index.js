import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react-snap prerenders static HTML into #root at build time. When that markup
// is present, hydrate it instead of throwing it away and re-rendering.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
