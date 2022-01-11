import {createStore,applyMiddleware} from 'redux';
import reducerAll from './reducer/Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux-saga/root';

const sagaMiddleware=createSagaMiddleware();
export const store = createStore(reducerAll, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);