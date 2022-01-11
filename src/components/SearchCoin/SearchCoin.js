import React, {useState} from 'react';
import 
{
    View, SafeAreaView ,TextInput , Text, TouchableOpacity, KeyboardAvoidingView, FlatList
} from 'react-native';
import FocusAwareStatusBar from '../../common/StatusBar/FocusAwareStatusBar';
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';
import {goBack} from '../../navigation/RootNavigation';
import ItemCoin from '../Markets/ItemCoin';

const SearchCoin = ()=>{
    const listCoin = useSelector(state => state.reducerMarkets.listCoin);

    const [textValue,setTextValue]=useState("");
    const [dataFlatList,setDataFlatList]=useState([]);


    const onChangeText=(value)=>{
        setTextValue(value);
        if(!value)
        {
            setDataFlatList([]);
            return;
        }
        const newData=[];
        for(let i=0;i<listCoin.length;i++)
        {
            for(let j=0;j<listCoin[i].data.length;j++)
            {
                const itemName = listCoin[i].data[j].name.toLowerCase();
                const itemShortName = listCoin[i].data[j].shortName.toLowerCase();
                if(itemName.indexOf(value.toLowerCase())>-1||itemShortName.indexOf(value.toLowerCase())>-1)
                {
                    newData.push(listCoin[i].data[j]);
                }
                if(newData.length==10)
                    break;
            }
            if(newData.length==10)
                    break;
        }
        setDataFlatList(newData);
    }

    const renderItemListCoint = ({ item, index }) => {
        return (
            <ItemCoin item={item} inex={index} isSearch={true} />
        );
    }

    return(
        <SafeAreaView style={{flex:1,backgroundColor: '#FAFBFE'}}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{flexDirection:'row',alignItems:'center',marginTop:30,borderBottomWidth:1}}>
                <TouchableOpacity style={{marginLeft:10}}
                    onPress={()=>goBack()}
                >
                    <Icon name="arrow-left" color='#000000' size={25} />
                </TouchableOpacity>
                <TextInput
                    style={{width:'80%',fontFamily:'Roboto-Regular',fontSize:15}}
                    defaultValue={textValue}
                    onChangeText={(value)=>onChangeText(value)}
                    autoCorrect={false}
                    placeholder='Tìm kiếm'
                />
            </View>
            <KeyboardAvoidingView style={{flex:1}}>
                <FlatList
                    data={dataFlatList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.marketId + item.shortName}
                    renderItem={renderItemListCoint}
                    initialNumToRender={10}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}   

export default SearchCoin;