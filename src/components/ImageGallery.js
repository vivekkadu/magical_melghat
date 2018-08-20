import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, BackHandler, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';
import Gallery from 'react-native-image-gallery';
import { Card, CardSection } from './common';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: props.album,
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
      <Card>

      <TouchableOpacity
        onPress={() => this.setState({ showModal: !this.state.showModal })} >
        <CardSection style={styles.CardSectionStyle}>

           <Image
            style={styles.imageStyle}
            source={{ uri: this.state.album }}
            />

        </CardSection>
      </TouchableOpacity>

      <Modal
       animationType="slide"
       onRequestClose={() => { this.setState({ showModal: false }); }}
       visible={this.state.showModal}>


      <TouchableOpacity onPress={() => { this.setState({ showModal: false })} }>

           <Icon name='close' style={styles.iconStyle} />

      </TouchableOpacity>

      <Gallery
      style={{ flex: 1, backgroundColor: 'black' }}
      images={[
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/406951His1.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/549243his2.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/447946g1.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/995455g2.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/335435g3.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/523154his4.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/533903WATER.png' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/718938WATER1.png' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/608924WATER2.png' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/439787LAND.png' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/379552WhatsApp%20Image%202017-09-15%20at%2012.17.08%20PM.jpeg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/426692Bagadari%20waterfalls.JPG' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/413387MELGHAT-6.JPG' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/DSC_9528E.jpg' } },
          { source: { uri: 'http://www.magicalmelghat.com/Assets/NewImages/714686I__00352.jpg' } },

      ]}
    />


      </Modal>
      </Card>

    );
  }
}
const styles = {
  imageStyle: {
    height: 220,
    width: 220,
     flex: 1
  },
  CardSectionStyle: {
    marginBottom: 10,
    backgroundColor: 'white'
  },
  buttonStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,

  },
  iconStyle: {
    fontSize: 120,
    padding: 10,
    //color: 'white',
    //backgroundColor: 'black'
  },
  backStyle: {
    fontSize: 15,
    color: 'black',
    paddingTop: 5,
    paddingLeft: 10

  }

};
export default ImageGallery;
