import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './a1-main/m1-ui/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./a1-main/m2-bll/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to registration() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
