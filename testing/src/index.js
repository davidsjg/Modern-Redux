import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

import App from "components/App";

ReactDOM.render(
  //                     reducers, initial state
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// using connect
// want to make sure CommentBox and CommentsList are wired up to our redux application
// do so by using connect function from react-redux library
// connect function talks to our redux store(or instance of redux that contains all of our reducers and state) through the use of the Provider tag
// Provider tag is a react component that communicates directly with every connect function that we create inside of our application
// provider tag and connect function work together to give our components direct acccess to the redux store
