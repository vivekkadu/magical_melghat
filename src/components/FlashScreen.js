import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Spinner } from './common';

class FlashScreen extends Component  {
  render() {
    return (
       <View style={styles.containerStyle}>
       <Image
         style={styles.mainiconStyle}
         source={require('../img/main.png')}
         />

      </View>
    );
  }
}
const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  mainiconStyle: {
    borderColor: 'black',
  }
};
export default FlashScreen;
