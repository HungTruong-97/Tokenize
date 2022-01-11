import {all} from "redux-saga/effects";
import {
    getMarkets
} from './fetch';
export default function* rootSaga(){
    yield all([getMarkets()]);
}