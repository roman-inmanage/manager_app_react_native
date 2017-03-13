import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;


  return (
      <TouchableOpacity onPress={onPress} style={buttonStyle} >
          <Text style={textStyle}>
            {children}
          </Text>
      </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
      flex: 1,
      height: 40,
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'cadetblue',
      backgroundColor: 'cadetblue',
      borderWidth: 1,
      borderRadius: 5
  },
  textStyle: {
    color: 'white'
  }
}
export { Button };
