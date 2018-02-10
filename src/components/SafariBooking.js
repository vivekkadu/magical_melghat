import React, { Component } from 'react';
import { View, ScrollView, Linking, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class SafariBooking extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
   Actions.Home();
   return true;
  }
render() {
  return (
    <ScrollView>
    <View>
     <Card style={{ marginBottom: 15 }}>
     <CardSection>
     <Text style={styles.label2Style}>
     Jungle Safari Booking
      </Text>
      </CardSection>
     <Text style={styles.labelStyle}>
     Check the Status and Seasonal Closing Dates
     </Text>
     <Text style={styles.labelStyle}>
      Book Your Jungle Safari
     </Text>
     <Button style={styles.buttonStyle} onPress={() => Linking.openURL('https://nationalpark.mahaonline.gov.in/User/Availability.aspx')} >
             <Text>Click To Book</Text>
      </Button>
     </Card>
     <Card>
     <CardSection>
     <Text style={styles.label2Style}>
     Night Safari Booking
      </Text>
      </CardSection>
      <Text style={styles.labelStyle}>
      Night Safari at (Harisal & Shahnoor)
      </Text>

      <Text style={styles.labelStyle}>
      1. Fees: Rs. 900 each vehicle{'\n'}
      2. Max. 4 participants, 1 driver is allowed{'\n'}
      3. Private vehicles allowed (SUV only){'\n'}
      4. Gypsy charges Rs. 1200 to be paid on-spot (Optional)
      </Text>
      <Text style={styles.labelStyle}>
       Book Your Night Safari
      </Text>
      <Button style={styles.buttonStyle} onPress={() => Linking.openURL('http://magicalmelghat.com/NightSafariLocation.aspx')}  >
              <Text>Click To Book</Text>
       </Button>
     </Card>
     </View>
     </ScrollView>
  );
}
}
const styles = {
  labelStyle: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  label2Style: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  buttonStyle: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#1E861F',
    marginTop: 8,
    borderRadius: 18,
    alignItems: 'center'
  }
}
export default SafariBooking;
