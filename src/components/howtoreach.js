import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, BackHandler, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

const destination = { latitude: 21.4060, longitude: 77.1485 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc';

class howtoreach extends Component {

  constructor(props) {
     super(props);
    this.state = {
      coordinates: [
        {
          latitude: 0.0,
          longitude: 0.0,
        }
      ],
    };
   }

componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
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
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
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
            placeholder='Change Your Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='auto'
            fetchDetails
            renderDescription={row => row.description}
            onPress={(data, details = null) => {
              console.log(details.geometry.location);
              this.setState({
                 coordinates: [
                   {
                         latitude: details.geometry.location.lat,
                         longitude: details.geometry.location.lng,
                  }
              ] });
            }}

     getDefaultValue={() => ''}

     query={{
       key: 'AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc',
       language: 'en',
     }}

     styles={{
       textInputContainer: {
         width: '100%'
       },
       description: {
         fontWeight: 'bold'
       },
       predefinedPlacesDescription: {
         color: 'black'
       }
       }}

     debounce={200}
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

              <MapView.Marker title="Selected Location >" coordinate={this.state.coordinates[0]} />
              <MapView.Marker title="Melghat Tiger Reserve" coordinate={destination} />

       </MapView>
       </View>

       </View>

       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

	},
  map: {
   ...StyleSheet.absoluteFillObject,

 },
 MapViewStyle: {
   height: 450,
   width: 350,
   marginTop: 0,
   justifyContent: 'center',
   alignItems: 'center',
 }

});
export default howtoreach;
