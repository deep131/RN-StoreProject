import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Src/screen/Home';
import AddProduct from './Src/screen/AddProduct';
import { mystore } from './Src/NewRedux/MyStore';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import MyCart from './Src/screen/MyCart';
const App = () => {
  LogBox.ignoreAllLogs() 
  //YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'RNDeviceInfo', 'Warning: An update']);
  const Stack = createStackNavigator();
  return (
    <Provider store={mystore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default App;
