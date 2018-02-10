import React, { Component } from 'react';
import { View, Text, TextInput, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './common';

class AccomodationForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    place: this.props.place,
    checkindate: this.props.checkin,
    checkoutdate: this.props.checkout
   };
}
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
   Actions.AccomodationForm();
   return true;
  }


render() {
  return (
    <Card>
    <Card style={{ flexDirection: 'row' }}>
    <Text style={styles.labelStyle}>Accomodation Place : </Text>
    <Text style={styles.labelStyle}>{this.state.place}</Text>
   </Card>
   <Card style={{ flexDirection: 'row' }}>
    <Text style={styles.labelStyle}>CheckIn Date : </Text>
    <Text style={styles.labelStyle}>{this.state.check}</Text>
    </Card>
    <Card style={{ flexDirection: 'row' }}>
    <Text style={styles.labelStyle}>CheckOut Date: </Text>
    <Text style={styles.labelStyle}>{this.state.place}</Text>
    </Card>
    </Card>
  );
}
}
const styles = {
  labelStyle: {
    color: 'black',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 1,
    marginTop: 8
  }
};
export default AccomodationForm2;
