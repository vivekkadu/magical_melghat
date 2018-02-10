import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  BackHandler,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Card, CardSection, Spinner } from './common';

class VideoGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      search: false
    }
  }

  componentDidMount() {
    return fetch("https://www.googleapis.com/youtube/v3/search?key="+"AIzaSyB3ZtedtLw1MqGI8AbdzdqakF9B6y9bNGM"+"&channelId=UCdC3X77SHj5imLkUgV7gRaQ&part=snippet,id&order=date&maxResults=20")
      .then((response) => response.json())
      .then((responseJson) => {
        var videoId = []
        responseJson.items.forEach(function(item){
          videoId.push(item)
        })
        this.setState({
          isLoading: false,
          data: videoId
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

   renderAlbums() {
     if (this.state.isLoading) {
       return <Spinner />
     }
    return this.state.data.map((item, i) =>
       <Card>
         <CardSection>
            <Text style={styles.titleStyle}>{item.snippet.title}</Text></CardSection>

       <CardSection style={{ backgroundColor: 'white' }}>
         <Image
           source={{ uri: item.snippet.thumbnails.high.url}}
          style={styles.thumbnailsStyle} />

   <View style={styles.ViewStyle}>
       <TouchableOpacity
       key={item.id.videoId}
       onPress={() => { Actions.YoutubeViewer({ videoId: item.id.videoId }); }}
       >
     <Icon iconStyle={styles.iconStyle} name="play-circle-filled" />
       </TouchableOpacity>
   </View>

   </CardSection>

   </Card>
 );
}


  render() {
    return (
     <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchStyle: {
    height:50,
    width:50
  },
  thumbnailsStyle: {
    width: 320,
    height: 180,
    flex: 1
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
   titleStyle: {
     fontSize: 20,
     color: 'white',
     padding: 5
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
  },
  iconStyle: {
    fontSize: 50,
    color: 'red',
    marginLeft: 5

  },

});

export default VideoGallery;
