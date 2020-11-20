/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// zomato api-key 29b880a1a71f3e32618853274cbce741
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppMain from './Appmain'
import 'react-native-gesture-handler'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import Reducers from './src/redux/reducers'

const App = () => {
  const store=createStore(Reducers)
  return (
    <Provider store={store}>
      <AppMain/>
    </Provider>
  );
};

export default App;
