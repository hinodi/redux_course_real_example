import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import NewFeed from './src/screens/NewFeed';
import Detail from './src/screens/Detail';
import SavedPost from './src/screens/SavedPost';
import store from './src/redux/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="NewFeed" component={NewFeed} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="SavedPost" component={SavedPost} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
