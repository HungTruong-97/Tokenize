import React, {useState} from  'react';
import {
    View, Text, TextInput,TouchableOpacity, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const TextInputComponent = ({style,IconLeft,placeholder,IconRight,secureTextEntry=false})=>{

    const [textValue,setTextValue]=useState("");
    const [isShowPass,setIsShowPass]=useState(false);

    return(
        <View style={[styles.container,style]}>
            {IconLeft}
            <TextInput
                style={styles.txtInput}
                defaultValue={textValue}
                onChangeText={(value)=>setTextValue(value)}
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor='#D6E1FF'
                secureTextEntry={secureTextEntry&&!isShowPass}
            />
            <TouchableOpacity onPress={()=>setIsShowPass(!isShowPass)}>
                {!IconRight?<View style={{width:25}}></View>
                :isShowPass?<Icon name="eye" color='#FFFFFF' size={25}/>:<Icon name="eye-off" color='#FFFFFF' size={25}/>}
            </TouchableOpacity>
        </View>
    );
}

export default TextInputComponent;

var styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        height:47,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:6,
        borderWidth:1.5,
        borderColor:'rgba(255, 255, 255, 0.2)',
        marginBottom:10
    },
    txtInput:{
        fontFamily:'Roboto-Medium',
        fontSize:18,
        color:'#D6E1FF', 
        height:47,
        width:265
    },
});