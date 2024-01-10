import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShoppingScreen from './src/component/server';
import { Alert, Image,View,TouchableOpacity } from 'react-native';
import icon from './src/assets/icon/icon';
import { Styles } from './src/assets/style/Style';

const Stack = createNativeStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="KichenWare" component={ShoppingScreen} options={{title:'KichenWare', headerTitleStyle:{
        fontSize:16,
        fontWeight:'400'
      },
      headerRight: () => (
        <View style={{flexDirection: "row",justifyContent: 'space-evenly',}}>
          <TouchableOpacity
            onPress={() => Alert.alert('Search-Items')}
            >
            <Image source={icon.search} tintColor='black' style={Styles.headerIcon}/>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('like-Me')}
            >
            <Image source={icon.heart1} tintColor='black'  style={Styles.headerIcon}/>
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('continue shopping')}
            >
            <Image source={icon.shoppingbag}  style={Styles.headerIcon1}/>
            
          </TouchableOpacity>
        </View>
      )
      }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;