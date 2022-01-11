import React, { useEffect, useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList
} from 'react-native';
import { IconDefault } from '../../common/Icon';
import Icon from 'react-native-vector-icons/Feather'

const ItemCoin = ({item,inex,isSearch=false}) =>{

    const toFixed=(x) => {
        if (Math.abs(x) < 1.0) {
            var e = parseInt(x.toString().split('e-')[1]);
            if (e) {
                x *= Math.pow(10, e - 1);
                x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
            }
        } else {
            var e = parseInt(x.toString().split('+')[1]);
            if (e > 20) {
                e -= 20;
                x /= Math.pow(10, e);
                x += (new Array(e + 1)).join('0');
            }
        }
        return x;
    }

    return(
        <TouchableOpacity style={{
            backgroundColor: '#FFFFFF', marginHorizontal: 10,
            height: 74, marginVertical: 5, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            shadowOpacity: 0.2,
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowColor: '#EBEDFB',
            elevation: 12,
        }}>
            <View style={{ marginLeft: 18, flexDirection: 'row', alignItems: 'center' }}>
                <IconDefault width={38} height={38} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15, color: '#3D436C' }}>
                        {!isSearch? item.shortName :item.market}
                    </Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#8E92B2', lineHeight: 18, width: 100 }}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        { item.name}
                    </Text>
                </View>
            </View>
            {item.lastPrice ? (
                <View style={{ marginRight: 18 }}>
                    <Text style={{ textAlign: 'right', fontFamily: 'Roboto-Medium', fontSize: 15, color: '#3D436C' }}>
                        ${item.lastPrice ? item.lastPrice : 0}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ textAlign: 'right', fontFamily: 'Roboto-Regular', fontSize: 13, color: item.openPrice < item.lastPrice ? '#3BBA7D' : '#F94B5C' }}>
                            {item.openPrice < item.lastPrice ? '+' : '-'}{(item.lastPrice / item.openPrice).toFixed(2)}%{' '}
                        </Text>
                        {item.openPrice < item.lastPrice ? <Icon name="arrow-up" color='#3BBA7D' size={10} /> :
                            <Icon name="arrow-down" color='#F94B5C' size={10} />}
                    </View>
                </View>
            ) : <View></View>}
        </TouchableOpacity>
    );
}

export default ItemCoin;