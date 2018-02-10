import React, { Component } from 'react';
import { ScrollView, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class ThingsToDo extends Component {
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
                <Text style={styles.headingStyle}>Night Jungle Safari</Text>
              </CardSection>


              <CardSection >
                      <Image
                      style={styles.imageStyle}
                      source={require('../img/nightsafari.png')}
                      / >

                      <View style={styles.ViewStyle}>
                      <Button rounded success onPress={() => { Actions.SafariBooking(); }}>
                         <Text style={styles.labelStyle}>BOOK NOW</Text>
                      </Button>
                      </View>
               </CardSection>


          </Card>

          <Card>

          <CardSection>

              <Text style={styles.headingStyle}>Melghat Machaan Thrill</Text>

          </CardSection>

          <CardSection>
                    <Image
                    style={styles.imageStyle}
                    source={require('../img/machan.png')}
                    />
                    <View style={styles.ViewStyle}>
                    <Button rounded success onPress={() => { Actions.MachaanBooking(); }}>
                       <Text style={styles.labelStyle}>BOOK NOW</Text>
                    </Button>
                    </View>
          </CardSection>


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
  labelStyle: {
    fontSize: 18,
    color: 'white'
      },
  ViewStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
};
export default ThingsToDo;
