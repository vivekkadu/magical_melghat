import React, { Component } from 'react';
import {
  View, StatusBar, Alert, Text, Dimensions, ScrollView, BackHandler, Image, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Drawer } from 'native-base';
import Swiper from 'react-native-swiper';
import SideBar from './DrawerComponent';
import { Card, CardSection } from './common';

class Home extends Component {


  constructor(props) {
    console.disableYellowBox = true;
    super(props);
     this.openDrawer = this.openDrawer.bind(this);
     this.closeDrawer = this.closeDrawer.bind(this);
      this.state = {
          position: 1,
          interval: null,
      };
  }
  state={ drawer: false };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    console.log(this.props.drawer);
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  ExitAlert() {
    Alert.alert(
    'Exit App',
    'Exiting the application?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
    }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
    }, ], {
        cancelable: false
    }

 )
 return true;
  }

  backAndroid() {
   if (this.state.drawer) {
     this.setState({ drawer: 'false' });
     return this.closeDrawer();
   } else {
     return this.ExitAlert();
   }
   }

       closeDrawer() {
           this.drawer._root.close();
        }

         openDrawer() {
           this.setState({
             drawer: true
           })
           this.drawer._root.open();
         }

  render() {

    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
       styles={styles.drawerStyles}
       openDrawerOffset={Dimensions.get('window').width / 3}
       panOpenMask={0.3}
       captureGestures="open"
       content={<SideBar closeDrawer={this.closeDrawer} />}
       onClose={() => this.closeDrawer()} >

      <ScrollView>

              <StatusBar
              backgroundColor="#11772D"
              barStyle="light-content"

              />

      <View style={{ backgroundColor: 'white' }}>
              <CardSection style={styles.CardSectionStyle}>

              <TouchableOpacity onPress={() => this.openDrawer()}>

              <Image
                style={styles.leftButtonStyle}
                source={require('../img/lines.png')}
                />

        </TouchableOpacity>

      <Text style={styles.headingStyle}>
         Magical Melghat
      </Text>

        </CardSection>
          <Card >

          <CardSection>
            <Text style={styles.titleStyle}>
              Melghat Tiger Reserve
           </Text>
      < /CardSection>

      <CardSection>
      <Swiper
      style={styles.wrapper}
      autoplayTimeout={3.0}
      autoplay showsPagination={false}
      >
              <View style={styles.slide1}>
              <Image
                style={styles.sliderImage}
                source={require('../img/pexels-photo-145939.png')}
                />
             </View>

             <View style={styles.slide2}>
              <Image
                style={styles.sliderImage}
                source={require('../img/pexels-photo-110812.png')}
                />

              </View>

              <View style={styles.slide3}>
              <Image
                style={styles.sliderImage}
                source={require('../img/leopard-wildcat-big-cat-botswana-46254.png')}
                />
              </View>
              </Swiper>
         </CardSection>

         <CardSection>
             <Text style={styles.subtitleStyle}>"Come to Melghat, Come home to Nature"</Text>

           </CardSection>
      </Card>

        <Card style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>

            <TouchableOpacity onPress={() => Actions.push('info')}>

                <CardSection style={{ flex: 1 }}>
                   <Image
                    style={styles.iconStyle}
                    source={require('../img/info.png')}
                    />
                   <Text style={styles.linkStyle}>
                   About Melghat
                   </Text>
                 </CardSection>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => Actions.howtoreach()}>

            <CardSection style={{ flex: 1 }}>
                  <Image
                     style={styles.iconStyle}
                    source={require('../img/how.png')}
                   />
                  <Text style={styles.linkStyle}>How to Reach</Text>
            </CardSection>
               </TouchableOpacity>
            </Card>


           <TouchableOpacity onPress={() => Actions.Gallery()}>
              <Card style={{ flexDirection: 'row' }}>
              <CardSection style={{ flex: 1 }}>
               <Image
               style={styles.iconStyle}
               source={require('../img/gallery.png')}
               />
               <Text style={styles.linkStyle}>Gallery </Text>
              </CardSection>
              </Card>
           </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.Sanctuary()}>
      <Card>

         <CardSection>
              <Image
               style={styles.iconStyle}
               source={require('../img/other.png')}
                 />
               <Text style={styles.linkStyle}>Other Sanctuary </Text>
         </CardSection>

      </Card>
     </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.Rules()}>
      <Card>
          <CardSection>
              <Image
              style={styles.iconStyle}
              source={require('../img/rules.png')}
              />
              <Text style={styles.linkStyle}>Rules & Regulations</Text>
          </CardSection>
      </Card>

          </TouchableOpacity>

         </View>

        </ScrollView>

      </Drawer>

    );
  }
}

const styles = {
  imagesStyle: {
    height: 150,
    width: 100,
    flex: 1
  },
  CardSectionStyle: {
    borderRadius: 0,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    paddingTop: 7,
    paddingBottom: 7
  },
  maintitleStyle: {
    color: 'black',
    fontSize: 20
  },
  titleStyle: {
    fontSize: 20,
    color: 'white',
    padding: 5,

  },
  subtitleStyle: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    paddingTop: 6,
    paddingBottom: 6
  },
  linkStyle: {
    fontSize: 17,
    color: 'white',
    padding: 10
  },
  CardSection: {
  flex: 1,
  borderRadius: 2,
  borderColor: 'black',
  marginLeft: 5,
  borderBottomWidth: 0
},
iconStyle: {
  width: 30,
   height: 30,
    marginTop: 8,
    margin: 6
},
leftButtonStyle: {
  height: 40,
  width: 40
},
drawerStyles: {
   shadowColor: '#000000',
   shadowOpacity: 0.8,
   shadowRadius: 3
},
headingStyle: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 22,
   marginTop: 3,
   marginLeft: 20
},
wrapper: {
  height: 220
 },
 slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 slide2: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 slide3: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 sliderImage: {
   height: 220,
   width: Dimensions.get('window').width

 }
};
export default Home;
