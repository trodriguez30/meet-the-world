import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Countries from "./Countries";
const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Countries />
    </Provider>
  );
}

export default App;
