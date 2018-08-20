import React, { Component } from 'react';
import { ScrollView, Image, View, Text, BackHandler, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import HTMLView from 'react-native-htmlview';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Contact extends Component {
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
const middleContent = `<p><b>Mailing Address:</b><br><br>C.C.F & F.D. <br>Melghat Tiger Reserve Camp, <br>Amravati<br>Pin Code 444 602
                             <br><b>For Enquiries :</b>
                             <br>(0721) 2662792/ +91 8956563016</p>`

const address1 = `<p><b>Sipna Division Office</b><br><br>Office of the Deputy Conservator of Forest
 <br>Melghat Tiger Reserve Camp, <br>Sipna Wildlife Division<br>Govt.Timber depot campus<br>Paratwada, Dist. Amravati	</p>`

    return (
    <ScrollView>
     <View>
      <Card style={{ justifyContent: 'flex-start' }}>
      <CardSection>
       <Text style={styles.headingStyle}>
         Contact To Park
       </Text>
      </CardSection>
      <Card>
      <HTMLView
        value={middleContent}
        stylesheet={styles}
      />
      </Card>
      <Card>
      <HTMLView
        value={address1}
        stylesheet={styles}
      />
      </Card>

      <Card style={{ marginBottom: 10 }}>
      <HTMLView
        value={address1}
        stylesheet={styles}
      />
      </Card>
      </Card>

      <Card>

      <CardSection>
        <Text style={styles.headingStyle}>Important Links</Text>
      </CardSection>

      <Card style={{ marginBottom: 10 }}>

      <CardSection
         style={{ padding: 10, justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
         <TouchableOpacity onPress={() => Linking.openURL('http://magicalmelghat.com/AccomodationBooking.aspx')}>
         <Image
          style={styles.iconStyle}
          source={require('../img/fd.png')}
          />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => Linking.openURL('http://magicalmelghat.com/AccomodationBooking.aspx')}>
          <Image
          style={styles.iconStyle}
          source={require('../img/mahagov.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('http://magicalmelghat.com/AccomodationBooking.aspx')}>
          <Image
            style={styles.iconStyle}
            source={require('../img/tlogo.png')}
            />
          </TouchableOpacity>
        </CardSection>
        </Card>
        </Card>
        </View>
        </ScrollView>
    );
  }
}
const styles = {
  headingStyle: {
    fontSize: 20,
    color: 'white',
    padding: 5

  },
  p: {
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    //paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 13,
    alignSelf: 'center',
  },
  iconStyle: {
    height: 90,
    width: 90
  }
};
export default Contact;
