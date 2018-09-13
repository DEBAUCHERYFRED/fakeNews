import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import FormContainer from "./js/components/container/FormContainer";

const store = createStore(
 rootReducer,
 applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById("create-article-form")
);
