import React ,{useState} from  'react';
import {
    View, Text, ImageBackground, TouchableOpacity,Dimensions, StyleSheet
} from 'react-native';
import { Logo } from '../../common/Icon';
import FocusAwareStatusBar from '../../common/StatusBar/FocusAwareStatusBar';
import {scaleSizeUI} from '../../common/Functions/scaleSizeUI';
import  TextInputComponent  from './TextInputComponent';
import Icon from 'react-native-vector-icons/Feather'
import {navigate} from '../../navigation/RootNavigation';
import {BOTTOM_TAB} from '../../common/constants/routerName';
const{width,height}=Dimensions.get('window');

const Login = ()=>{

    const [isRemember,setIsRemember]=useState(false);
    
    return(
        <View style={{flex:1}}>
            <FocusAwareStatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <ImageBackground
                source={background} 
                resizeMode='stretch'
                style={style.imgBg}>
                <View style={style.viewLogo}>
                    <Logo width={55} height={55} />
                    <Text style={style.txtSignin}>
                        Sign in
                    </Text>
                    <Text style={style.txtDescription}>
                        Please sign in to continue
                    </Text>
                </View>
                <View style={style.viewTextInput}>
                    <TextInputComponent
                        IconLeft={<Icon name="user" color='#FFFFFF' size={25}/>}
                        placeholder="Email"
                    />
                    <TextInputComponent
                        IconLeft={<Icon name="lock" color='#FFFFFF' size={25}/>}
                        placeholder="Password"
                        IconRight={true}
                        secureTextEntry={true}
                    />
                </View>
                <View style={style.viewSupportLogin}>
                    <View style={style.viewRemember}>
                        <TouchableOpacity style={style.checkbox}
                            onPress={()=>setIsRemember(!isRemember)}
                            activeOpacity={1}>
                            {isRemember&&<Icon name="check" color='#FFFFFF' size={17}/>}
                        </TouchableOpacity>
                        <Text style={style.txtRemember}>
                            Remember me
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={style.txtForgot}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.viewBtSignin}>
                    <TouchableOpacity style={style.btSignin}
                        onPress={()=>navigate(BOTTOM_TAB)}
                    >
                        <Text style={style.txtBtSignin}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.txtQuestion}>
                            Don’t have an account yet? <Text style={style.txtSignup}>SIGN UP</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;

const background = require('../../assets/images/bg_login.png');

var style=StyleSheet.create({
    imgBg:{
        position:'absolute',
        width:width,
        height:height,
        alignItems:'center'
    },
    viewLogo:{
        marginTop:100,
        alignItems:'center'
    },
    txtSignin:{
        fontFamily:'Roboto-Bold',
        fontSize:23,
        color:'#FFFFFF',
        marginTop:25
    },
    txtDescription:{
        fontFamily:'Roboto-Regular',
        fontSize:16,color:'#D6DFFF',
        marginTop:9
    },
    viewTextInput:{
        marginTop:60,
        width:'100%'
    },
    viewSupportLogin:{
        marginTop:16,
        paddingHorizontal:10,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewRemember:{
        flexDirection:'row',
        alignItems:'center'
    },
    checkbox:{
        width:19,
        height:19,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        borderWidth:1.5,
        borderRadius:4,
        borderColor:'rgba(255, 255, 255, 0.2)'
    },
    txtRemember:{
        fontFamily:'Roboto-Medium',
        fontSize:14,color:'#FFFFFF',
        marginLeft:6
    },
    txtForgot:{
        fontFamily:'Roboto-Medium',
        fontSize:14,
        color:'#FFFFFF',
        marginLeft:6
    },
    viewBtSignin:{
        width:'100%',
        position:'absolute',
        bottom:80
    },
    btSignin:{
        marginHorizontal:10,
        height:45,
        backgroundColor:'#BDCFFF',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    txtBtSignin:{
        fontFamily:'Roboto-Bold',
        fontSize:14,
        color:'#5073F2'
    },
    txtQuestion:{
        fontFamily:'Roboto-Regular',
        fontSize:14,
        color:'#FFFFFF',
        textAlign:'center',
        width:'100%',
        marginTop:20
    },
    txtSignup:{
        fontFamily:'Roboto-Bold',
        fontSize:14,
        color:'#FFFFFF'
    },
});