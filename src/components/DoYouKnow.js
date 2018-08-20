import React, { Component } from 'react';
import { Image, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

const images = [
  { id: 1, uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }
];


class DoYouKnow extends Component {
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
      <Card>
      <CardSection>
      <Image
          style={{ width: 50, height: 50}}
          source={images.uri}
        />
      </CardSection>
      </Card>
    );
  }
}
export default DoYouKnow;
