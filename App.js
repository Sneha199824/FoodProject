import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/component/navigationTab/DrawerNavigator';
import { EmptyCart } from './src/component/cart/EmptyCart';
import { Image } from 'react-native';
import Highlight from './src/component/homeScreens/Highlight';
import Discount from './src/component/homeScreens/Discount';
import { ListItem } from './src/component/homeScreens/ListItems';
import { Detailed } from './src/component/homeScreens/Detailed';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DrawerScreen'
        screenOptions={{
          headerShown: true,
          headerMode: 'screen',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }} />
           <Stack.Screen
          name="EmptyCart"
          component={EmptyCart}
          options={{
            headerTitleAlign:'center',
            
          }} />
           <Stack.Screen
          name="Discount"
          component={Discount}
          options={{
            headerShown: false,
          }} />
          <Stack.Screen
          name="Highlight"
          component={Highlight}
          options={{
            headerShown: false,
          }} />
           <Stack.Screen
          name="ListItem"
          component={ListItem}
          options={{
           
          }} />
           <Stack.Screen
          name="Detailed"
          component={Detailed}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;