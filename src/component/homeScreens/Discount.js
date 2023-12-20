import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import image from '../../assets/images/image';
import { styles } from '../../assets/style/styles';
import icon from '../../assets/icons/icon ';
import { styles1 } from '../../assets/style/styles1';
import { useNavigation } from '@react-navigation/native';

const Discount = (props) => {
    const ARR = [
        {
            id: 1, image1: image.egeimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 2, image1: image.burgurimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 3, image1: image.egeimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 4, image1: image.burgurimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },


    ]
    const renderItem = ({ item }) => (
        <View style={styles1.swipermainview}>
            <View style={styles1.egeview}>
                <Image source={item.image1} style={styles1.egeimage} />
                <Text style={styles.PROMOTEXT}>{item.promotext}</Text>

                <Text style={styles.PIZZATEXT}>{item.pizztext}</Text>
                <View style={styles.KMVIEW}>
                    <Text style={styles.KM}>{item.kmtext}</Text>
                    <Image source={item.starimage} style={styles.STARIMAGE} />
                    <Text style={styles.KM}>{item.km1text}</Text>
                    <TouchableOpacity>
                        <Image source={item.hearticon} style={styles1.heart1} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.discountView}>
                <Text style={styles.discountText}>Discount guaranteed</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ListItem', { title: 'Discount guaranteed' })
  }>
                    <Image source={icon.arrowright} style={styles.arrowright} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={ARR}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
            />
            <View>
                <Image source={image.FoodCard2} style={styles.foodcard3} />
            </View>

        </ScrollView>
    )
}
export default Discount;