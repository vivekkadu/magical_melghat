import React, { Component } from 'react';
import { ScrollView, Image, BackHandler, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { Button, Text } from 'native-base';
import Gallery from 'react-native-image-gallery';
import { Card, CardSection } from './common';

class MachaanBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
    showModal: false
   };
}
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

        <Card>

            <CardSection>

               <Text style={styles.headingStyle}>
                   Be Prepared to Stay on a Machan
                 </Text>

             </CardSection>

            <CardSection>

                    <Image
                    style={styles.imageStyle}
                    source={require('../img/machan.png')}
                    />


           </CardSection>

        </Card>

        <Card>

          <CardSection>

               <Text style={styles.headingStyle}>
                   Check Dates for Machan Thrill
               </Text>

          </CardSection>

          <CardSection>
                      <Image
                      style={styles.imageStyle}
                      source={require('../img/MachaanDate.png')}
                      />
         </CardSection>


         <Button style={styles.buttonStyle} onPress={() => Linking.openURL('http://www.magicalmelghat.com/MachaanDivision.aspx')}  >
              <Text>Click To Book</Text>
         </Button>


        </Card>

      </ScrollView>
    );
  }
}
const styles = {
  headingStyle: {
    color: 'white',
    fontSize: 18,
    padding: 5
  },
  imageStyle: {
    height: 300,
    flex: 1
  },
  buttonStyle: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#1E861F',
    marginTop: 8,
    borderRadius: 18,
    alignItems: 'center'
  },
  iconbuttonStyle: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 50,

    }
};
export default MachaanBooking;
