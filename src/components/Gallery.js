import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, Tab, Tabs, TabHeading, Container } from 'native-base';
import axios from 'axios';
import { View, ScrollView, TouchableOpacity, BackHandler, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

import { Spinner } from './common';

class Gallery extends Component {

  state={ albums: [], Spinner: true };


  componentWillMount() {
     axios.get('https://vivekkaducodeplayer.000webhostapp.com/project/LibraryList.json')
        .then(response => this.setState({ albums: response.data, Spinner: false }));
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


renderAlbums() {
  if (this.state.Spinner) {
    return <Spinner />
  }
	return this.state.albums.map(album =>
		<ImageGallery key={album.id} album={album.link} />
	);
}
  render() {
    return (
      <Container style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 2 }}>

     <Tabs tabContainerStyle={{ padding: 0, height: 50 }}>

        <Tab
           heading={<TabHeading style={{ backgroundColor: '#1E861F' }}>
            <Icon iconStyle={{ color: 'white' }} name="collections" />
            <Text style={{ marginLeft: 5 }}>Image Gallery</Text>
            </TabHeading>}
            >

            <ScrollView>
              {this.renderAlbums()}
            </ScrollView>
            </Tab>
            <Tab
            heading={<TabHeading style={{ backgroundColor: '#1E861F' }}>
              <Icon iconStyle={{ color: 'white' }} name="videocam" />
              <Text>Video Gallery</Text></TabHeading>}>
                <VideoGallery />
              </Tab>
        </Tabs>
    </Container>

    );
  }
}
export default Gallery;
