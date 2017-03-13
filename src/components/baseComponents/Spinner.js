import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = () => {
  return (
    <View style={styles.indicatorContainerStyle}>
      <ActivityIndicator size={"large"}/>
    </View>
  );
};

const styles = {
  indicatorContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export { Spinner };
