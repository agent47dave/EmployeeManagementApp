import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga/rootSaga";

const initialState = {};

//middleware
// const sagaMiddleware = createSagaMiddleware();

//create a store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// sagaMiddleware.run(rootSaga);

export default store;
