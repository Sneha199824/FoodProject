import React from "react";
import { TextInput, View, StyleSheet, Text,Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
   
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCorrect={autoCorrect}
                value={value}>
            </TextInput>
        </View>
    )
}
const styles=  StyleSheet.create({
    containerStyle:{
    
        margin:15,
        borderRadius:32,
        height:height*0.06,
        borderColor:'rgba(236, 241, 246, 1)',
        borderWidth:2,
        backgroundColor:'#ECF1F6'
    },
inputStyle:{
    fontSize:14,
    paddingLeft:40,
    color:'#cdcfd1',
    fontWeight:'400',
    fontStyle:'normal',
    
    
},
labelStyle:{
    color:'black',
    paddingLeft:30,
    flex:1
}
});