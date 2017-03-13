import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>

  );
};

const styles = {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'cadetblue',
      height: 60,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.9,
      elevation: 4
    },
    textStyle: {
      color: 'white',
      fontSize: 20
    }
};

export { Header };
