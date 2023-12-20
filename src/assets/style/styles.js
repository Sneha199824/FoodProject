import { StyleSheet,Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    marginTop: 11
  },
  headertext: {
    fontfamily: 'Open Sans',
    fontsize: 20,
    fontStyle: 'normal',
    lineheight: 32,
    fontWeight: '500',
    color: '#616161'
  },
  headericon1: {
    height: 24,
    width: 24,

  },
  headericon2: {
    display: 'flex',
    width: 24,
    height: 24,
    marginRight:20,
    flexShrink: 0,

  },
  container: {
    flex: 1,


  },
  swiper: {
    height: 180,
    margin:10
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  dot: {
    backgroundColor: 'rgba(209, 216, 221, 1)',
    width: 68,
    height: 4,
    marginBottom: 150,
    borderRadius: 2



  },
  activeDot: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 68,
    height: 4,
    marginBottom: 150,
    borderRadius: 2

  },
  pagination: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  frame: {
    marginBottom: 60,
    height: '70%',
    width: '90%',
    marginLeft: 20,
    marginRight: 24,
    resizeMode: 'stretch',
    padding: 20
  },
  offerTextView: {

    marginLeft: 24,
    marginRight: 30,
    marginBottom: 12

  },
  offerText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(23, 23, 37, 1)',


  },
  searchicon: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 30, top: 24

  },
  hotdogView:
  {
    width: 68,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 11,
    display: 'inline-flex'
  },

  hotdogImage: {
    height: 48,
    width: 48,
    resizeMode: 'stretch',


  },
  hotdogText: {
    color: '#212121',
    fontSize: 14,
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
    lineHeight: 24,
    width: 84,
    textAlign: 'center',

  },
  slide1: {
    flexDirection: 'row',
    width:'100%',
   display:'flex',
   flexShrink:0,
   alignItems:'center',
    },
  foodcard2:{
    width:'48%',
    resizeMode:'contain',
   height:192,
   marginLeft:10
    },
  KMVIEW:{
    flexDirection:'row',
    
  },
  PROMOTEXT:{
    backgroundColor:'#F87146',
    padding:8,
    paddingTop:4,
    paddingBottom:4,
    textAlign:'center',
    position:'absolute',
    color:'white',
    left:3,
    top:10,
    fontWeight:'800'
   },
   OFFTEXT:{
   textAlign:'right',
  fontSize:14
   },
   PIZZATEXT:{
    fontSize:18,
    fontWeight:'600',
    lineHeight:28,
   textAlign:'left',
    color:'#212121'
    },
    PIZZATEXT2:{
      paddingLeft:5
    },
   STARIMAGE:{
    height:12,
    width:12,
    marginTop:3,
    
   },
   KM:{
    fontSize:14,
    fontWeight:'500',
    lineHeight:20,
     },
     offview:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexShrink:0,
      padding:12,
      paddingBottom:4,
      paddingTop:4,
      width:192,
      backgroundColor:'black'
     },
  slide2: {
    flexDirection: 'row',
    width: '100%',
    margin:20
  },


  discountText: {
    color: '#171725',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    lineHeight: 32,

  },
  discountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    margin: 16
  },
  arrowright: {
    height: 16,
    width: 16,
    marginTop: 10
  },
  foodcard3: {
    width: '90%',
    resizeMode: 'stretch',
    height: 116,
    margin: 16,
    alignItems: 'center'
  },
  foodcard4: {
    width: '100%',
    resizeMode: 'cover',
    height: 123,
    borderRadius:12
    
  },
  
  Aptext: {
    color: '#171725',
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    lineHeight: 20,
    width:250

  },
  recommendview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 230,
    borderBottomWidth: 1,
    margin: 30,
    
    borderColor: '#BFC6CC',
   
    justifyContent:'center',
    
  },
  recommendtext: {
    paddingLeft: 10,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 32,
    color: '#332C45'
  },
  recommendimage: {
   resizeMode:'contain', 
   height:220,
   width:'100%',
   },
   voucher1View1:{
    width:"100%",
    justifyContent:'center'
   },
locationview:{
  flexDirection:'row',
  marginLeft:5,
  
},

});

