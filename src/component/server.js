import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import icon from '../assets/icon/icon';
import {Styles} from '../assets/style/Style';
import Modal1 from './Modal';
const ShoppingScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const[color,setColor]=useState(true)
 
   
   
  useEffect(() => {
    const apiUrl = 'https://storeapi.wekreta.in/api/v4/product/customer';
    const params = {
      id: '0',
      secondaryKey: '3d70712a-26fb-11ee-b277-029ff3b26cce',
      productName: '',
      categoryName: 'serveware,kitchenware',
      subCategoryName: '',
      subSubCategoryName: '',
      brandName: '',
      isFeatured: '0',
      search: '',
      currentPage: '1',
      itemsPerPage: '27',
      sortBy: 'createdDate',
      sortOrder: 'desc',
      isFetchListing: '0',
      searchTag: '',
      storeUuid: 'cb910d4a-bf60-11ed-814d-0252190a7100',
    };
    const axoisData = async () => {
      try {
        const response = await axios.get(apiUrl, {params});
        setData(response.data.object);
        setFilteredData(response.data.object);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    axoisData();
  }, [currentPage]);
  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color="green" />
    ) : null;
  };

  return (
    <View style={{backgroundColor:'white'}}>
    <View style={{flexDirection:'row'}}>
    <View style={Styles.filterView}>
    
    <Image source={icon.sort} style={Styles.filterIcon} tintColor='black'/>
     <Text style={Styles.filterText}>Sort</Text>
     
      
    </View>
    <Modal1/>
    </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={Styles.container}>
            {console.log('item>>>', item)}
            <Image
              source={{uri: item.mediaUrl}}
              style={{height:160,width:'100%',}}
            />
            <TouchableOpacity onPress={()=> setColor(!color)}>
            {color? 
            <Image source={icon.heart1} style={Styles.heartIcon} tintColor='black'/>:
            <Image source={icon.heart1} style={Styles.heartIcon} tintColor='red'/>}
            </TouchableOpacity>
            <Text style={Styles.NewText}>New</Text>
            <Text style={Styles.descriptionText}>{item.description}</Text>
            {item.category.map((item)=>
              <Text style={Styles.nameText}>{item.name}</Text>
            
            )}
           
            {item.variants.map((item)=>
            <View>
            <View style={{flexDirection:'row',}}>
              <Text style={Styles.allText}>{item.variant}</Text>
              <Text style={Styles.allText}>(MRP:{item.mrp})</Text>
             
              </View>
              <Text style={Styles.allText}>SellingPrice:{item.sellingPrice}</Text>
              </View>
            )}
           
            
            <Text style={Styles.allText}>rating:{item.rating}</Text>
            
           
            
          </View>
        )}
       

        ListFooterComponent={renderFooter}
        onEndReached={() => {
          // Load more data when reaching the end of the list
          if (!isLoading) {
            setCurrentPage(currentPage => currentPage + 1);
          }
        }}
        onEndReachedThreshold={0.1}
        numColumns={2}
         // Adjust the threshold as needed
      />

      {error && <Text>Error: {error.message}</Text>}

      <Button
        title="Reload Data"
        onPress={() => {
          // Reset page and refetch data when the button is pressed
          setCurrentPage(1);
        }}
      />
    </View>
  );
};

export default ShoppingScreen;
