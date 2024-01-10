import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Image} from 'react-native';
import { Styles } from '../assets/style/Style';
import icon from '../assets/icon/icon';
const Modal1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>Filter By Name</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>Low To High Price</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>High To Low Price</Text>
            </TouchableOpacity>
            
           
          </View>
        </View>
      </Modal>
    
      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
    <TouchableOpacity>
    
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <View style={Styles.filterView}>
    
        <Image source={icon.filter} style={Styles.filterIcon}/>
        <Text style={Styles.filterText}>Filter</Text>
        </View>
      </TouchableOpacity>
     
      
    
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   marginBottom:20,
   
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      backgroundColor:'lightgray'
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal1;