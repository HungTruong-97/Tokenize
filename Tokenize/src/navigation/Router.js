import React from "react";
import {
    BOTTOM_TAB, LOGIN_SCREEN, SEARCH_SCREEN
} from '../common/constants/routerName';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import Login from "../components/Login/Login";
import BottomTab from "./BottomTab";
import SearchCoin from "../components/SearchCoin/SearchCoin";
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

const Router = () => {

    const MyTransition = {
        gestureDirection: 'horizontal',
        transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
                cardStyle: {
                    transform: [
                        {
                            translateX: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [layouts.screen.width, 0],
                            }),
                        }
                    ],
                },
                overlayStyle: {
                    opacity: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                    }),
                },
            };
        },
    }

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={{ headerShown: false, ...MyTransition }} >
                <Stack.Screen name={LOGIN_SCREEN} component={Login} />
                <Stack.Screen name={BOTTOM_TAB} component={BottomTab} />
                <Stack.Screen name={SEARCH_SCREEN} component={SearchCoin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;