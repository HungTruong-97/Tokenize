import React, { useEffect, useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList
} from 'react-native';
import FocusAwareStatusBar from '../../common/StatusBar/FocusAwareStatusBar';
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import { getMarketsData } from '../../redux/action';
import { STATE_GET_DATA_MARKETS_SUCCESS, STATE_GET_DATA_MARKETS_FAIL } from '../../common/constants/action';
import { IconDefault } from '../../common/Icon';
import Loading from '../../common/Loading/Loading';
import {SEARCH_SCREEN} from '../../common/constants/routerName';
import {navigate} from '../../navigation/RootNavigation';
import ItemCoin from './ItemCoin';

const Markets = () => {
    const dispatch = useDispatch();
    const listMarkets = useSelector(state => state.reducerMarkets.listCoinBase);
    const listCoin = useSelector(state => state.reducerMarkets.listCoin);
    const marketState = useSelector(state => state.reducerMarkets.requestSate);
    const [marketChoosed, setMarketChoosed] = useState();
    const [dataFlatList, setDataFlatList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        dispatch(getMarketsData);
    }, [])

    useEffect(() => {
        if (marketState === STATE_GET_DATA_MARKETS_SUCCESS) {
            setMarketChoosed(listMarkets[0].title);
            setDataFlatList(listCoin[0].data);
            setIsLoading(false);
        }
        else if (marketState === STATE_GET_DATA_MARKETS_FAIL)
            setIsLoading(false);
    }, [marketState]);

    const onPressMarket = (market, index) => {
        setMarketChoosed(market);
        setDataFlatList(listCoin[index].data);
    }

    const renderItemMarket = ({ item, index }) => {
        return (<TouchableOpacity style={{
            marginLeft: 10, width: 78, height: 32, backgroundColor: item.title === marketChoosed ? '#6992FF' : '#E4E9F9',
            borderRadius: 6, alignItems: 'center', justifyContent: 'center', marginRight: index == listMarkets.length - 1 ? 10 : 0
        }}
            onPress={() => onPressMarket(item.title, index)}
            activeOpacity={1}
        >
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.title === marketChoosed ? '#FFFFFF' : '#8E92B2' }}>{item.title}</Text>
        </TouchableOpacity>)
    }

    const renderItemListCoint = ({ item, index }) => {
        return (
            <ItemCoin item={item} inex={index} />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFBFE' }}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{ flex: 1 }}>
                <View style={{
                    width: '100%', paddingHorizontal: 10, marginTop: 46, marginBottom: 20,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 16, color: '#3D436C', marginLeft: 18 }}>
                        MARKETS
                    </Text>
                    <TouchableOpacity
                        onPress={()=>navigate(SEARCH_SCREEN)}
                    >
                        <Icon name="search" color='#40466D' size={25} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={listMarkets}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index + item.title}
                    renderItem={renderItemMarket}
                />
            </View>
            <View style={{ flex: 4 }}>
                <FlatList
                    data={dataFlatList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.marketId + item.shortName}
                    renderItem={renderItemListCoint}
                />
            </View>
            <Loading isLoading={isLoading} />
        </SafeAreaView>
    );
}

export default Markets;