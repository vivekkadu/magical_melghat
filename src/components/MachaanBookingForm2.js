import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class MachaanBookingForm2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.machaanLocation,
      mobile: this.state.mobileNo,
      email: this.state.email,
      fare: this.state.rate
   };
}
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
   Actions.MachaanBookingForm();
   return true;
  }

  render() {
    return (
      <Card>
      <CardSection>
       <Text style={{ color: 'white', fontSize: 16 }}>
          Booking Details
       </Text>
       </CardSection>
        <CardSection>
          <Text>{this.props.firstName}</Text>
          <Text>{this.props.lastName}</Text>
          <Text>{this.props.rate}</Text>

        </CardSection>
      </Card>
      );
  }
}
export default MachaanBookingForm2;
