import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import image from '../../assets/images/image';
import icon from '../../assets/icons/icon ';
import { styles1 } from '../../assets/style/styles1';
const DrawerScreen = (navigation) => {
    const data = [
        {
            id: 1,
            ICON: icon.wallet,
            text: 'Wallet'
        },
        {
            id: 2,
            ICON: icon.location,
            text: 'My Address'
        },
        {
            id: 3,
            ICON: icon.discount,
            text: 'Special offer/ Promotion'
        },
    ]
    return (
        <ScrollView style={{ width: '80%' }}>
            <View>
                <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                    <View style={styles1.headerView}>
                        <Image source={image.Ellipse} style={styles1.elipsimage} />
                        <View style={styles1.headertextview}>
                            <Text style={styles1.dangtext}>Dang bao bao</Text>
                            <Text style={styles1.id}>ID: 0443787676</Text>
                        </View>
                    </View>
                    <View style={styles1.mapViewMAIN}>
                        {data.map((item, index) => {
                            return (
                                <View style={styles1.mapView} >
                                    <Image source={item.ICON} style={styles1.ICON} />
                                    <View style={{ marginLeft: 16 }}>
                                        <Text style={styles1.dangtext}>{item.text}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles1.endview}>
                        <Text style={styles1.endtext}>Language</Text>
                        <Text style={styles1.endtext}>Order history</Text>
                        <Text style={styles1.endtext}>Notification</Text>
                        <Text style={styles1.endtext}>Share infomation</Text>
                        <Text style={styles1.endtext}>Terms and policies</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
export default DrawerScreen;