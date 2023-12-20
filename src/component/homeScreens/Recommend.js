import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import image from '../../assets/images/image';
import { styles } from '../../assets/style/styles';
import { styles1 } from '../../assets/style/styles1';
import icon from '../../assets/icons/icon ';
const Recommend = () => {
    const ARR = [
        {
            id: 1, image1: image.recommend1, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart,
        },
        {
            id: 2, image1: image.recommend2, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart,
        },
        {
            id: 3, image1: image.recommend3, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart,
        },
    ]
    const renderItem = ({ item }) => (
        <View style={styles1.swipermainview}>
            <View style={styles1.egeview}>
                <Image source={item.image1} style={[styles1.egeimage, styles1.egeimage3]} />
                <Text style={styles.PROMOTEXT}>{item.promotext}</Text>

                <Text style={styles.PIZZATEXT}>{item.pizztext}</Text>
                <View style={styles.KMVIEW}>
                    <Text style={styles.KM}>{item.kmtext}</Text>
                    <Image source={item.starimage} style={styles.STARIMAGE} />
                    <Text style={styles.KM}>{item.km1text}</Text>
                    <TouchableOpacity>
                        <Image source={item.hearticon} style={styles1.heart2} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>);
    return (
        <ScrollView style={{ marginTop: 16, marginBottom: 30 }}>
            <View >

                <Text style={styles.discountText}>   Recommended For You</Text>
            </View>
            <FlatList
                data={ARR}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    )
};
export default Recommend;