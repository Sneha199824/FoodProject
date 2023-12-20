import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import icon from '../../assets/icons/icon ';
import homeScreen from '../homeScreens/homeScreen';
import  Discount  from '../homeScreens/Discount';
import Highlight from '../homeScreens/Highlight';
import Recommend from '../homeScreens/Recommend';
const Tab = createBottomTabNavigator();
 const BottomTab=()=> {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor:'#F87146'
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={homeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            focused?(
            <Image source={icon.home} style={{height:20,width:20}}/>):(<Image source={icon.home1} style={{height:20,width:20}}/>)
          ),headerShown:(false)
        }}
      />
        <Tab.Screen
        name="Discount"
        component={Discount}
        options={{
          tabBarLabel: 'Favourite',
          
          tabBarIcon: ({ focused }) => (
            !focused?(
            <Image source={icon.heart} style={{height:20,width:20}}/>):(<Image source={icon.heart1} style={{height:20,width:20}}/>)
          ),headerShown:(false)
          
        }}
      /> 
      <Tab.Screen
        name="Highlight"
        component={Highlight}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ focused }) => (
            !focused?(
            <Image source={icon.receipt} style={{height:20,width:20}}/>):(<Image source={icon.receipt1} style={{height:20,width:20}}/>)
          ),headerShown:(false)
          }
        }

      />
       <Tab.Screen
        name="recommend"
        component={Recommend}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({ focused }) => (
            !focused?(
            <Image source={icon.gift} style={{height:24,width:24}}/>):(<Image source={icon.gift1} style={{height:20,width:20}}/>)
          ),headerShown:(false)
        }}
      /> 
    </Tab.Navigator>
  );
}
export default BottomTab;