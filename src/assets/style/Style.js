import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const Styles = StyleSheet.create({
  container:{
    height:380,
   
    width:'49%',
    padding:7,
    
    margin:3
  },
  heartIcon:{
    height:20,width:20,
    position:'absolute',
    right:10,
   bottom:130
  },
  NewText:{
    backgroundColor:'black',
    color:'white',
    padding:2,
    textAlign:'center',
    borderWidth:1,width:50,
    position:'absolute',
    top:140,
    left:5,
    fontSize:13,
    fontWeight:'600'
  },
  descriptionText:{
    fontSize:12,
    fontWeight:'600',
    color:'black',
    paddingTop:5
  },
  nameText:{
    fontSize:12,
    paddingTop:3,
    color:'black'
  },
  allText:{
    fontSize:12,
    paddingTop:2
  },
  TextInput:{
    width:80,
   
    borderWidth:1
  },
  headerIcon:{
    height:20,
    width:20,
    margin:20,
   
  },
  headerIcon1:{
    height:20,
    width:20, 
    marginTop:18,
    marginLeft:15
  },
  filterView:{
    flexDirection:'row',
    justifyContent:'flex-end',
   marginLeft:20,
    padding:5
  },
  filterText:{
    fontSize:15,
    fontWeight:'500',
    paddingLeft:7
  },
  filterIcon:{
    height:12,
    width:12,
    marginTop:5
  }
})
