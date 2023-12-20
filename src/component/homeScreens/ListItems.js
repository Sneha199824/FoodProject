import React,{ useLayoutEffect } from "react";
import { FlatList,View,Text,ScrollView,Image,TouchableOpacity } from "react-native";
import { styles } from "../../assets/style/styles";
import { styles1 } from "../../assets/style/styles1";
import icon from "../../assets/icons/icon ";
import image from "../../assets/images/image";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Detailed } from "./Detailed";


 export const ListItem=()=>{
    const route = useRoute();
    const navigation = useNavigation();
  useLayoutEffect(() => {
    const title = route.params?.title || 'Default Title';
    navigation.setOptions({ title });
  }, [navigation, route.params]);

    const data=[
    {    id: 1, image1: image.egeimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 2, image1: image.burgurimage, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 3, image1: image.voucher1, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 4, image1: image.voucher2, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 5, image1: image.foodcard3, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 6, image1: image.foodcard4, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 7, image1: image.recommend1, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 8, image1: image.recommend2, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 9, image1: image.recommend1, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    {
        id: 10, image1: image.recommend2, promotext: 'PROMO', offtext: '4% off your order', pizztext: 'Pizza Hut', kmtext: '5 Km |',
        starimage: icon.star, km1text: '4.8(1.2 k)', hearticon: icon.heart1,
    },
    ]
    const renderItem = ({ item }) => (
        // console.log('item>>>',item),
        <TouchableOpacity onPress={()=>navigation.navigate('Detailed')
    }>
        <View style={styles1.swipermainview1}>
            <View style={styles1.egeview}>
                <Image source={item.image1} style={styles1.listimage} />
              

                <Text style={styles.PIZZATEXT}>{item.pizztext}</Text>
                <View style={styles.KMVIEW}>
                    <Text style={styles.KM}>{item.kmtext}</Text>
                    <Image source={item.starimage} style={styles.STARIMAGE} />
                    <Text style={styles.KM}>{item.km1text}</Text>
                   
                </View>
            </View>
        </View></TouchableOpacity>
        );

    return(
  <View>
   
    <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                initialScrollIndex={1}
            />
  </View>
    )
}