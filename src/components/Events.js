import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class Events extends Component {
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
      <Card>
      <CardSection>
      <Text>SDNKL</Text>
      </CardSection>
      </Card>

    );
  }
}
export default Events;
