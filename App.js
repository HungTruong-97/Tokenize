/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
} from 'react-native';
import Router from './src/navigation/Router';
import {Provider} from 'react-redux';
import {store} from './src/redux/index';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
