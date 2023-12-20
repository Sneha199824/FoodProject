import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import image from '../../assets/images/image';
import icon from '../../assets/icons/icon ';
import { styles1 } from '../../assets/style/styles1';
import { styles } from '../../assets/style/styles';
import { ListItem } from './ListItems';
import { useNavigation } from '@react-navigation/native';

const Highlight = () => {
   
    const ARR = [
        {
            id: 1, image1: image.burgurCard, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 2, image1: image.pizzaCard, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 3, image1: image.burgurCard, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 4, image1: image.pizzaCard, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
    ]
    const data = [
        { id: 1, image2: image.voucher1, text: 'Áp dụng 02 voucher mỗi đơn' },
        { id: 2, image2: image.voucher2, text: 'Áp dụng 02 voucher mỗi đơn' },
        { id: 3, image2: image.voucher1, text: 'Áp dụng 02 voucher mỗi đơn' },
        { id: 4, image2: image.voucher2, text: 'Áp dụng 02 voucher mỗi đơn' },
    ]
    const ARR1 = [
        {
            id: 1, image3: image.foodcard3, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 2, image3: image.foodcard4, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 3, image3: image.foodcard3, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
        {
            id: 4, image3: image.foodcard4, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
            starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
        },
    ]
    const data1 = [
        { id: 1, image2: image.restorent1, text: 'Elisandra Restaurant', location: icon.location, text1: 'Elisandra Restaurant' },
        { id: 2, image2: image.restorent2, text: 'Elisandra Restaurant', location: icon.location, text1: 'Elisandra Restaurant' },
        { id: 3, image2: image.restorent1, text: 'Elisandra Restaurant', location: icon.location, text1: 'Elisandra Restaurant' },
        { id: 4, image2: image.restorent2, text: 'Elisandra Restaurant', location: icon.location, text1: 'Elisandra Restaurant' },
    ]
    const navigation = useNavigation();
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
        </View>);
    const renderItem1 = ({ item }) => (
        <View style={styles.swipermainview}>
            <View style={styles.voucher1View}>
                <Image source={item.image2} style={styles1.egeimage1} />
                <Text style={styles.Aptext}>{item.text}</Text>
            </View>
        </View>
    )
    const renderItem2 = ({ item }) => (
        <View style={styles1.swipermainview}>
            <View style={styles1.egeview}>
                <Image source={item.image3} style={styles1.egeimage} />
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
        </View>);
    const renderItem3 = ({ item }) => (
        <View style={styles.swipermainview}>
            <View style={styles.voucher1View1}>
                <Image source={item.image2} style={styles1.egeimage2} />
                <Text style={[styles.PIZZATEXT, styles.PIZZATEXT2]}>{item.text}</Text>
                <View style={styles.locationview}>
                    <Image source={item.location} style={styles.locationimage} />
                    <Text style={styles.Aptext1}>{item.text1}</Text>
                </View>
            </View>
        </View>
    )
    return (
        <ScrollView style={styles.mainContainer}>

            <View style={styles.discountView}>
                <Text style={styles.discountText}>What's delicious around here?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ListItem', { title: 'What delicious around here?' })
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
            <FlatList
                data={data}
                renderItem={renderItem1}
                keyExtractor={(item) => item.id}
                horizontal
            />

            <View style={styles.discountView}>
                <Text style={styles.discountText}>Highlights of March</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ListItem', { title: 'Highlights of March' })
  }>
                    <Image source={icon.arrowright} style={styles.arrowright} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={ARR1}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                horizontal
            />
            <View style={styles.discountView}>
                <Text style={styles.discountText}>Nearby Restaurants</Text>
                <TouchableOpacity>
                    <Image source={icon.arrowright} style={styles.arrowright} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data1}
                renderItem={renderItem3}
                keyExtractor={(item) => item.id}
                horizontal
            />

        </ScrollView>
    )
};
export default Highlight;