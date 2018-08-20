import React, { Component } from 'react';
import { View, ScrollView, BackHandler, Text, Dimensions, Image, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class Accomodation extends Component {
  state={ drawer: false };

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
      <Card>
      <CardSection>
      <Swiper
      style={styles.wrapper}
      autoplayTimeout={3.0}
      nextButton={<Icon iconStyle={{ color: 'white', fontSize: 50 }} name="navigate-next" />}
      prevButton={<Icon iconStyle={{ color: 'white', fontSize: 50 }} name="navigate-before" />}
      autoplay showsPagination={false}
      showsButtons

      >
              <View style={styles.slides}>
              <Text style={styles.labelStyle}>4 No "A Type Cottage" @ Semadoh	</Text>
              <Image
              style={styles.sliderImage}
              source={require('../img/acc.png')}
              />
              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>64 Beds "Dormitory" @ Semadoh</Text>

              <Image
                style={styles.sliderImage}
                source={require('../img/acc1.png')}
                />


              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>6 No "Circular Hut" @ Semadoh</Text>

              <Image
                style={styles.sliderImage}
                source={require('../img/acc2.png')}
                />

              </View>
          
              <View style={styles.slides}>
              <Text style={styles.labelStyle}>7 No. "Eco Hut" @ Shahanur</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc3.png')}
                />

              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>6 "Eco Tent" @ Shahanur</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc4.png')}
                />

              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>40 Beds "Dormitory" @ Shahanur</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc5.png')}
                />

              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>2 No. "VIP Suite" @ Kolkas</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc6.png')}
                />

              </View>


              <View style={styles.slides}>
              <Text style={styles.labelStyle}>7 No. "Cottage" @ Kolkas</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc7.png')}
                />

              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>18 Beds "Dormitory" @ Kolkas</Text>
              <Image
                style={styles.sliderImage}
                source={require('../img/acc8.png')}
                />

              </View>

              <View style={styles.slides}>
              <Text style={styles.labelStyle}>2 No. Cottages @ Shahanur</Text>

              <Image
                style={styles.sliderImage}
                source={require('../img/acc9.png')}
                />

              </View>

              </Swiper>
         </CardSection>
         </Card>

          <Card style={{ marginBottom: 15, marginTop: 15 }}>

         <CardSection>
          <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Booking Rules</Text>
         </CardSection>

         <Text style={styles.rulesStyle}>
     1)  Full occupancy charges for the entire period of stay to paid in Credit card/ Debit card / Net Banking at the time of booking.
        </Text>
         <Text style={styles.rulesStyle}>
      2) Reservation of accommodation ones make not transferable.
        </Text>
        
        <Text style={styles.rulesStyle}>
      3) Accommodation reservation should be occupied on the first day of reservation or at the latest on following day before check in timing
          otherwise reservation will be treated as cancelled and 100% amount will be forfeited.
        </Text>

         <Text style={styles.rulesStyle}>
      4) Online booking cancellation refund will be reverted back on the Credit card/ Debit card/ Net Banking account.
        </Text>

         <Text style={styles.rulesStyle}>
      5) No liquor allowed in side premises.
        </Text>
         </Card>

      <Card>
      <CardSection>
         <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Cancellation Rules</Text>
      </CardSection>

      <Text style={styles.rulesStyle}>
        1) 7 days before check-in-date and time - 10% of ticket value to be retained by Melghat Tiger Reserve.
     </Text>

    <Text style={styles.rulesStyle}>
      2) Within 7 days but before 72 houres of check-in-date and time - 25% of ticket value to be retained by Melghat Tiger Reserve.
     </Text>

     <Text style={styles.rulesStyle}>
      3) Within 72 houres of check-in-date and time or No Show - 100% of ticket value to be retained by Melghat Tiger Reserve.
     </Text>

      <Button style={styles.buttonStyle} onPress={() => Linking.openURL('http://magicalmelghat.com/AccomodationBooking.aspx')} >
              <Text style={{ color: 'white', fontSize: 18, padding: 10 }}>Click To Book</Text>
       </Button>

      </Card>

      </View>
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1
  },
  labelStyle: {
    color: 'white',
    fontSize: 18,
    padding: 5
      },
  ViewStyle: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //alignSelf: 'flex-end',

  },
  wrapper: {
    height: 260
   },
   slides: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     //backgroundColor: 'white',
   },
   sliderImage: {
     height: 230,
     width: Dimensions.get('window').width

   },
   rulesStyle: {
     color: 'black', padding: 3, paddingLeft: 10, fontSize: 14
   },
   buttonStyle: {
     alignSelf: 'center',
     padding: 10,
     marginBottom: 10,
     backgroundColor: '#1E861F',
     marginTop: 10,
     borderRadius: 18,
     alignItems: 'center'
   }
};
export default Accomodation;
