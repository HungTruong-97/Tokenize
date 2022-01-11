import { combineReducers } from "redux";
import {
    STATE_GET_DATA_MARKETS_IDLE,STATE_GET_DATA_MARKETS_TRYING,
    STATE_GET_DATA_MARKETS_SUCCESS,STATE_GET_DATA_MARKETS_FAIL,
    ACTION_GET_DATA_MARKETS_REQUEST, ACTION_GET_DATA_MARKETS_SUCCESS,
    ACTION_GET_DATA_MARKETS_FAIL
} from '../../common/constants/action';

const INITIAL_STATE_MARKETS ={
    requestSate : STATE_GET_DATA_MARKETS_IDLE,
    listCoinBase : [
        {
            title:""
        }
    ],
    listCoin:[],
};

const reducerMarkets = (state = INITIAL_STATE_MARKETS, action) =>{
    switch(action.type){
        case ACTION_GET_DATA_MARKETS_REQUEST:
            return {...state, requestSate: STATE_GET_DATA_MARKETS_TRYING};
        case ACTION_GET_DATA_MARKETS_SUCCESS:
            return {...state, requestSate: STATE_GET_DATA_MARKETS_SUCCESS,
                listCoinBase:action.listCoinBase,listCoin:action.listCoin};
        case ACTION_GET_DATA_MARKETS_FAIL:
            return {...state, requestSate: STATE_GET_DATA_MARKETS_FAIL};
        default:
            return {...state};
    }
}

const AppReducer = combineReducers({
    reducerMarkets
});

export default AppReducer;