import React, { Component } from 'react';
import { Image, Text, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';
import HTMLView from 'react-native-htmlview';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

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
    return (
      <Card>
      <CardSection>
      <Text style={styles.headingStyle}>
         Contact To Park
      </Text>
      </CardSection>
      <CardSection style={{ justifyContent: 'flex-start' }}>
      <HTMLView
        value={middleContent}
        stylesheet={styles}
      />
      </CardSection>
      <CardSection>
        <Text style={styles.headingStyle}>Important Links</Text>
      </CardSection>
      <CardSection style={{ padding: 10, justifyContent: 'space-between' }}>
      <Image
        style={styles.iconStyle}
        source={require('../img/fd.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../img/mahagov.png')}
          />
          <Image
            style={styles.iconStyle}
            source={require('../img/tlogo.png')}
            />
        </CardSection>
      </Card>
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
    color: 'white',
    justifyContent: 'center',
    paddingLeft: 12,
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
