import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import CountriesReducer from "./countries/reducer";

import rootSaga from "./countries/saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const rootReducer = combineReducers({
  Countries: CountriesReducer
});

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return { store };
}
