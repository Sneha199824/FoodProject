import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { styles1 } from '../../assets/style/styles1';
import icon from '../../assets/icons/icon ';
 export const EmptyCart=(props)=>{
    return(
        <View style={styles1.EmptyCartMainView}>
        <View>
            <Image source={icon.smilingface} style={styles1.smileface}></Image>
            </View>
            <View>
                <Text  style={[styles1.smiletext, styles1.smiletextorder]}>No orders</Text>
            </View>
            <View>
                <Text style={styles1.smiletext}>Sorry, you have no orders in your cart, please add your order to your cart.</Text>
            </View>
        </View>
    )
 }
 