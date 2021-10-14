import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import cart from "./cart";
import toast, { toastsSaga } from "./toast";

function* rootSaga() {
  yield all([toastsSaga()]);
}

const rootReducer = combineReducers({
  cart,
  toast,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
); //스토어 생성

sagaMiddleware.run(rootSaga);

export default rootReducer;
