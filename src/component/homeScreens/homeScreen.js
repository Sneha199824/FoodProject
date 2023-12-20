import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Input } from '../common/input';
import icon from '../../assets/icons/icon ';
import { styles } from '../../assets/style/styles';
import Discount from './Discount';
import Recommend from './Recommend';
import Highlight from './Highlight';
import image from '../../assets/images/image'
const HomeScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      IMAGE: image.frame,

    },
    {
      id: 2,
      IMAGE: image.frame,

    },
    {
      id: 3,
      IMAGE: image.frame,

    },
    {
      id: 4,
      IMAGE: image.frame,

    },
  ];
  const Data = [
    {
      id: 1,
      title: image.hotdog,
      text: "Flash deal"
    },
    {
      id: 2,
      title: image.Restaurant,
      text: 'Nice shop'
    },
    {
      id: 3,
      title: image.FoodApp,
      text: 'Points'
    },
    {
      id: 4,
      title: image.ShavedIce2,
      text: 'Rice'
    },
    {
      id: 5,
      title: image.Pho,
      text: 'Noodles'

    },
    {
      id: 6,
      title: image.ShavedIce1,
      text: 'Vegetable'
    },
    {
      id: 7,
      title: image.ShavedIce4,
      text: 'BBQ'
    },
    {
      id: 8,
      title: image.ShavedIce3,

      text: 'Other',

    },

  ]


  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor='#FFFFFF' />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.openDrawer('DrawerScreen')}>

        </TouchableOpacity>

      </View>
      <View>
        <Input placeholder="What are you yearning for?" />
        <Image source={icon.search} style={styles.searchicon} />

      </View>

      <ScrollView >
        <View>

          <View style={styles.container}>
            <View style={styles.offerTextView}>
              <Text style={styles.offerText}>Special offer</Text>
            </View>
            <View style={styles.swiper}>
              <Swiper
                showsButtons={false}
                showsPagination={true}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                paginationStyle={styles.pagination}
                autoplay={true}
              >
                {data.map((item, index) => {
                  return (
                    <View >
                      <Image source={item.IMAGE} style={styles.frame} />
                    </View>
                  );
                })}
              </Swiper>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Data.map((Item, index) => {
              return (

                <View style={styles.hotdogView}>

                  <Image source={Item.title} style={styles.hotdogImage} />
                  <Text style={styles.hotdogText}>{Item.text}</Text>
                </View>

              );
            })}
          </View>
        </View>
        <Discount />
        <Highlight />
        <Recommend />
      </ScrollView>
    </View>
  );
};



export default HomeScreen;