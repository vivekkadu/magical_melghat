import React, { Component } from 'react';
import { ScrollView, Image, BackHandler, Linking, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { Button, Text } from 'native-base';
import Gallery from 'react-native-image-gallery';
import { Card, CardSection } from './common';

class MachaanBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <ScrollView>

        <Card>

            <CardSection>

               <Text style={styles.headingStyle}>
                   Be Prepared to Stay on a Machan
                 </Text>

             </CardSection>

            <CardSection>

                    <Image
                    style={styles.imageStyle}
                    source={require('../img/machan.png')}
                    />


           </CardSection>

        </Card>

        <Card>

          <CardSection>

               <Text style={styles.headingStyle}>
                   Check Dates for Machan Thrill
               </Text>

          </CardSection>

          <TouchableOpacity onPress={() => { this.setState({ showModal: true })}}>
          <CardSection>
                      <Image
                      style={styles.imageStyle}
                      source={require('../img/MachaanDate.png')}
                      />
         </CardSection>
         </TouchableOpacity>


         <Button style={styles.buttonStyle} onPress={() => Actions.MachaanBookingForm()} >
              <Text>Click To Book</Text>
         </Button>


        </Card>

        <Modal
        animationType="slide"
        onRequestClose={() => { this.setState({ showModal: false }); }}
        visible={this.state.showModal}>

        <TouchableOpacity onPress={() => { this.setState({ showModal: false })} }>
        <CardSection style={{ height: 30, backgroundColor: 'white' }}>
             <Icon name='arrow-back' style={styles.iconStyle} />
             <Text style={styles.backStyle}>Back</Text>
        </CardSection>
        </TouchableOpacity>

        <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
            { source: { uri: 'http://magicalmelghat.com/UPLOADimages/780260MachaanDateInfo.jpg' } }
        ]}
        />


        </Modal>
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
  buttonStyle: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#1E861F',
    marginTop: 8,
    borderRadius: 18,
    alignItems: 'center'
  },
  iconbuttonStyle: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 50,

    }
};
export default MachaanBooking;
