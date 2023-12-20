// CustomHeader.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library as needed

const CustomHeader = ({ title, iconName, onIconPress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        {iconName && (
          <Icon name={iconName} size={24} color="white" onPress={onIconPress} />
        )}
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
