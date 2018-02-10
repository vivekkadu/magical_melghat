import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class NightSafariBookingForm extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
   Actions.SafariBooking();
   return true;
  }
  render() {
    return (
   <Card>
  <CardSection>
  <Text>Hello</Text>
   </CardSection>
   </Card>
    );
  }
}
export default NightSafariBookingForm;
