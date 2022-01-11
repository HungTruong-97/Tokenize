import { Alert } from "react-native";
import {put,takeLatest,call,all} from "redux-saga/effects";
import {API} from './API';
import {ACTION_GET_DATA_MARKETS_FAIL, ACTION_GET_DATA_MARKETS_REQUEST, ACTION_GET_DATA_MARKETS_SUCCESS} from '../../common/constants/action';

function* fetchDataMarkets()
{
    try{
        const response = yield all([
            call(API.getMarketSummaries),
            call(API.getMarkets)]);
        let listCoinBase=[];
        let listCoin=[];
        for(let i=0,j=response[1].data.length;i<j;i++)
        {
            listCoinBase.push({title:response[1].data[i].title});
            const listCoinOfMarket = response[1].data[i].list.map((item)=>{
                let dataPrice = {};
                for(let a=0,b=response[0].data.length;a<b;a++)
                {
                    if(response[0].data[a].market === item.marketName)
                    {
                        dataPrice = response[0].data[a];
                        break;
                    }
                }
                return {
                    shortName:item.marketCurrency,
                    name : item.marketCurrencyLong,
                    ceiling : item.ceiling,
                    floor : item.floor,
                    ...dataPrice
                }
            });
            listCoin.push({market:response[1].data[i].title,data:listCoinOfMarket});
        }
        yield put({
            type:ACTION_GET_DATA_MARKETS_SUCCESS,
            listCoinBase,
            listCoin
        });
    }
    catch(error)
    {
        console.log(error);
        yield put({type:ACTION_GET_DATA_MARKETS_FAIL});
        Alert.alert("Có lỗi xảy ra trong quá trình xử lý");
    }
}

export function* getMarkets()
{
    yield takeLatest(ACTION_GET_DATA_MARKETS_REQUEST,fetchDataMarkets);
}