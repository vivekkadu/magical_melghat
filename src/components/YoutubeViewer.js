import React, { Component } from 'react';
import {
  BackHandler,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Youtube from 'react-native-youtube';

class YoutubeViewer extends Component {
  state = { fullscreen: true }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
   
  }
  render() {
    return (
     <Youtube
             ref={(component) => { this._youTubePlayer = component }}
             key={this.props.videoId}
             videoId={this.props.videoId}
             play={true}
             fullscreen={this.state.fullscreen}
             loop={false}
             apiKey='AIzaSyB3ZtedtLw1MqGI8AbdzdqakF9B6y9bNGM'
             onReady={e => this.setState({ isReady: true })}
             onChangeState={e => this.setState({ status: e.state })}
             onChangeQuality={e => this.setState({ quality: e.quality })}
             onError={e => this.setState({ error: e.error })}
             onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}

             style={{
               alignSelf: 'stretch',
               height: 300,
               backgroundColor: 'black',
               marginVertical: 10
             }}
            />

    );
  }
}

export default YoutubeViewer;
