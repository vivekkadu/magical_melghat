import React, { Component } from 'react';
import { Container } from 'native-base';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {
  Image,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  BackHandler,
  TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection } from './common';
import DrawerLinks from './DrawerLinks';


class DrawerComponent extends Component {
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

  <Container style={styles.drawerStyles}>
    <ScrollView>

       <TouchableWithoutFeedback onPress={() => { this.props.closeDrawer(); }} >
       <View>

         <Card style={{ borderColor: '#D6D6D4', borderBottomWidth: 1 }}>
         <CardSection style={{ marginBottom: 10, backgroundColor: 'white' }}>
              <Image
                style={styles.mainiconStyle}
                source={require('../img/main.png')}
                />
           </CardSection>
          </Card>
          </View>
        </TouchableWithoutFeedback>


      <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.Home(); }}>
         <DrawerLinks
            linkname="Home"
            iconname="home"
          />
    </TouchableOpacity>

   <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.AccomodationForm(); }}>
      <DrawerLinks
          linkname="Accomodation"
          iconname="hotel"
      />
   </TouchableOpacity>

  <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.SafariBooking(); }}>
      <DrawerLinks
          linkname="Safari Booking"
           iconname="lock"
      />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.MachaanBooking(); }}>

      <DrawerLinks
          linkname="Machaan Booking"
           iconname="lock"
      />
  </TouchableOpacity>


   <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.DoYouKnow(); }}>
        <DrawerLinks
            linkname="Do You Know"
            iconname="help"
        />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.ThingsToDo(); }} >
      <DrawerLinks
          linkname="Things to do"
           iconname="assignment"
      />
  </TouchableOpacity>

 <TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.Events(); }}>
      <DrawerLinks
          linkname="Events"
          iconname="event"
      />
</TouchableOpacity>

<TouchableOpacity onPress={() => { this.props.closeDrawer(); Actions.Contact(); }}>
      <DrawerLinks

          linkname="Contact Us"
          iconname="phone"
      />
  </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => { this.props.closeDrawer(); }} >
      <View style={{ flex: 1, height: 100 }}/>
       </TouchableWithoutFeedback>
      </ScrollView>

     </Container>
    );
  }
}
const styles = {
  drawerStyles: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 0,
    //marginTop: 55
  },
  mainiconStyle: {
    flex: 1,
    borderColor: 'black',
  },
  iconStyle: {
    fontSize: 30,
    color: '#808080',
    marginBottom: 110

  }
};
export default DrawerComponent;
