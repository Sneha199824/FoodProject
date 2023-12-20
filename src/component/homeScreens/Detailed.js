import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import image from '../../assets/images/image';
import icon from '../../assets/icons/icon ';
import { styles1 } from '../../assets/style/styles1';
import { styles } from '../../assets/style/styles';


 export const Detailed=()=>{
   
    return(
        <View style={styles1.swipermainview2}>
            <View style={styles1.egeview}>
                <Image source={image.egeimage} style={styles1.egeimage4} />
                <Text style={styles.PROMOTEXT}>PROMO</Text>

                <Text style={styles.PIZZATEXT}>Pizza Hut</Text>
                <View style={styles.KMVIEW}>
                    <Text style={styles.KM}>5 Km |</Text>
                    <Image source={icon.star} style={styles.STARIMAGE} />
                    <Text style={styles.KM}>4.8(1.2 k)</Text>
                    <TouchableOpacity>
                        <Image source={icon.heart4} style={styles1.heart1} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}