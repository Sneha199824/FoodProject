import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from'./DrawerScreen';
import { Image, View } from 'react-native';
import icon from '../../assets/icons/icon ';
import { styles } from '../../assets/style/styles';
import BottomTab from './bottomTab';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EmptyCart } from '../cart/EmptyCart';
const Drawer = createDrawerNavigator();
const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator initialRouteName="bottom"
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen
        name="NYC, Broadwa..." component={BottomTab} options={{
          headerLeftt: () => (
            <Image
              source={icon.vertical}
              style={styles.headericon1} />),
          headerRight: () => (
            <View style={{flexDirection:'row',marginTop:8}}>
            <Image source={icon.arrowright}style={styles.headericon2}/>
            <Image source={icon.bell} style={styles.headericon2}></Image>
            <TouchableOpacity onPress={()=>props.navigation.navigate('EmptyCart')}>
            <Image source={icon.beg} style={styles.headericon2}/></TouchableOpacity></View>),
        }} />
    </Drawer.Navigator>
  )
};
export default DrawerNavigator;
