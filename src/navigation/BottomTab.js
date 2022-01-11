import React from 'react';
import {
    Text, View
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/Home/Home';
import Markets from '../components/Markets/Markets';
import Wallets from '../components/Wallets/Wallets';
import Portfolio from '../components/Portfolio/Portfolio';
import More from '../components/More/More';
import {
    HOME_SCREEN, MARKETS_SCREEN, WALLETS_SCREEN, PORTFOLIO_SCREEN, MORE_SCREEN
} from '../common/constants/routerName';
import {
    HomeIcon, MarketsIcon, WalletsIcon, PortfolioIcon, MoreIcon
} from '../common/Icon';

const Tab = createMaterialBottomTabNavigator();

const BottomTab =()=>{
    return (
        <Tab.Navigator
            initialRouteName={MARKETS_SCREEN}
            barStyle={{ backgroundColor: '#FFFFFF' }}
            activeColor="#6081FA"
            labeled={true}
            shifting={false}
        >
            <Tab.Screen  
                name={HOME_SCREEN}
                component={Home}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({color})=>(
                        <HomeIcon color={color} width={23} height={23} />
                    ),
                }}
            />
            <Tab.Screen  
                name={MARKETS_SCREEN}
                component={Markets}
                options={{
                    tabBarLabel:'Markets',
                    tabBarIcon:({color})=>(
                        <MarketsIcon color={color} width={23} height={23} />
                    ),
                }}
            />
            <Tab.Screen  
                name={WALLETS_SCREEN}
                component={Wallets}
                options={{
                    tabBarLabel:'Wallets',
                    tabBarIcon:({color})=>(
                        <WalletsIcon color={color} width={23} height={23} />
                    ),
                }}
            />
            <Tab.Screen  
                name={PORTFOLIO_SCREEN}
                component={Portfolio}
                options={{
                    tabBarLabel:'Portfolio',
                    tabBarIcon:({color})=>(
                        <PortfolioIcon color={color} width={23} height={23} />
                    ),
                }}
            />
            <Tab.Screen  
                name={MORE_SCREEN}
                component={More}
                options={{
                    tabBarLabel:'More',
                    tabBarIcon:({color})=>(
                        <MoreIcon color={color} width={23} height={23} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTab;