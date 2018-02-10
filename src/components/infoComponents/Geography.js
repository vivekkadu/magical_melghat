import React from 'react';
import { StyleSheet, ScrollView, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import { Card, CardSection } from '../common';

class Geography extends React.Component {
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
    const TopContent = `<p>   At the northern extreme of the Amravati district of Maharashtra, on the border of Madhya Pradesh, lies the Melghat in the South-Western Satpura mountain ranges. Melghat means 'meeting of the ghats', which describes the area as a large tract of unending hills and ravines scarred by jagged cliffs and steep climbs.
    <br>The Melghat was declared a tiger reserve in 1974. Presently, the total area of the reserve is around 2768.52 km2. The forest is tropical dry deciduous in nature, dominated by teak (Tectona grandis).
    <br>The reserve is a catchment area for five major rivers: the Khandu, Khapra, Sipna, Gadga and Dolar, all of which are tributaries of the river Tapti. Many different kinds of wildlife, both flora and fauna, are found here.
    <br>The tiger reserve is located at 21°26′45″N To 77°11′50″E Coordinates: 21°26′45″N To 77°11′50″E in northern part of Amravati District of Maharashtra State in India. The Tapti River and the Gawilgadh ridge of the Satpura Range form the boundaries of the reserve.</p>`;

    const middleContent = `<p><b>~ Climate :</b><br><br>Climate of Melghat is varies due to variation in altitude, and there are three distinct seasons viz. Monsoon or rainy, Winter & Summer . The area experiences a good rainfall during monsoon which varies from 950 mm to 1400 mm with average number of rainy days being about 60 to 65.
    <br>Temperature varies considerably with altitude. The high hills, plateau and valleys to the north of Gavilgarh ridge are cooler in summer than the southern foothills. The plateau and high hills enjoy almost equitable pleasant climate throughout the year. The average mean maximum annual temperature is 46oC. and the average mean minimum temperature is 4oC.</p>`
    return (
      <ScrollView>
      <Card>
      <CardSection>
      <HTMLView
        value={TopContent}
        stylesheet={styles}
      />
      </CardSection>
      <CardSection style={{ marginTop: 10 }}>
      <HTMLView
        value={middleContent}
        stylesheet={styles}
      />
      </CardSection>
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    color: 'white',
justifyContent: 'center',
paddingLeft: 10,
paddingTop: 13,
paddingBottom: 13,
alignSelf: 'center',

    // make links coloured pink
  },
});

export { Geography };
