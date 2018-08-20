import React, { Component } from 'react';
import {
  View, Text, ScrollView, StyleSheet, BackHandler, Modal, Image, Dimensions, TouchableOpacity
}
  from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import { Spinner } from './common';


const destination = { latitude: 21.4060, longitude: 77.1485 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc';

Geocoder.setApiKey('AIzaSyANxWlEWdo07O7dWIWRFlaNJGRbhX1ZfSw');

class howtoreach extends Component {

  constructor(props) {
     super(props);
    this.state = {
      coordinates: [
        {n
          latitude: 0.0,
          longitude: 0.0,
        }
      ],
      showModal: false,
      address: '',
      location: ''
    };
   }

componentDidMount() {
  LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
           ok: 'YES',
           cancel: 'NO',
           enableHighAccuracy: true,
           showDialog: true,
           openLocationServices: true,
           preventOutSideTouch: false,
           preventBackClick: false
       }).then(function (success) {
           // success => {alreadyEnabled: true, enabled: true, status: "enabled"}
           navigator.geolocation.getCurrentPosition(
             (position) => {
               this.setState({
                  coordinates: [{
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
               }
                ],
                 error: null
               });
             },
             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
           );
       });

  console.log(this.state.coordinates);
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
      <View style={styles.container}>


      <GooglePlacesAutocomplete
            placeholder='Search Here'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='auto'
            fetchDetails
            renderDescription={(row) => row.description || row.vicinity}
            onPress={(data, details = null) => {
              console.log(details);
              this.setState({
                 coordinates: [
                   {
                         latitude: details.geometry.location.lat,
                         longitude: details.geometry.location.lng,
                  }
              ],
              address: details.formatted_address });
            }}

     getDefaultValue={() => ''}

     query={{
       key: 'AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc',
       language: 'en',
     }}

     styles={{
       textInputContainer: {
         width: '100%',
         backgroundColor: 'white'
       },
       description: {
         //fontWeight: 'bold',
         color: '#1E861F',


       },
       textInput: {
         color: '#1E861F'
       },
       predefinedPlacesDescription: {
         color: '#1E861F',
         fontSize: 16,
         marginLeft: 45
       },
       container: {
         backgroundColor: 'white',
       },
      separator: {
        color: 'black'
      }
        }}
       currentLocation
       currentLocationLabel="Current Location"
       nearbyPlacesAPI='GooglePlacesSearch'
       debounce={0}
       renderLeftButton={() =>
        <Image
        style={{ height: 30, width: 30, margin: 10 }}
        source={require('../img/searchicon.png')} />
      }
      renderRightButton={() =>
        <View style={{ margin: 7 }}>
        <TouchableOpacity onPress={() => ''}>
        <Icon name='close' />
        </TouchableOpacity>
        </View>
      }

   />

            <View style={styles.MapViewStyle}>

            <MapView
                    style={styles.map}
                    region={{
                      latitude: 21.4060,
                      longitude: 77.1485,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                    }}
                    provider="google"
                    mapType="standard"
                    zoomEnabled
                    pitchEnabled
                    showsUserLocation
                    followsUserLocation
                    showsCompass
                    showsMyLocationButton
                    showsBuildings
                    toolbarEnabled
                    showsTraffic
                    showsIndoors
                >

                <MapViewDirections
                    origin={this.state.coordinates[0]}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={8}
                    mode="driving"
                    strokeColor="#00b3fd"
              />

              <MapView.Marker title={this.state.address} coordinate={this.state.coordinates[0]} />
              <MapView.Marker title="Melghat Tiger Reserve" coordinate={destination} />

       </MapView>
       </View>

       </View>
       <Modal
       animationType="slide"
       transparent
       onRequestClose={() => { this.setState({ showModal: false }); }}
       visible={this.state.showModal}>
       <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
       <View style={{ backgroundColor: 'white', width: 400, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
       <Spinner style={{ marginTop: 30 }} />
       <Text style={{ marginTop: 30, padding: 10, fontSize: 18, color: 'black' }}>
        Fetching Your Location
        </Text>

       </View>
       </View>
       </Modal>
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

	},
  map: {
   ...StyleSheet.absoluteFillObject,

 },
 MapViewStyle: {
   height: 460,
   width: Dimensions.get('window').width,
   marginTop: 0,
   justifyContent: 'center',
   alignItems: 'center',
 }

});
export default howtoreach;
