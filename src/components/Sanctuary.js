import React, { Component } from 'react';
import { ScrollView, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class Sanctuary extends Component {
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
      <Text style={styles.headingStyle}>Dnyanganga Wildlife Sanctuary</Text>
      </CardSection>
      <CardSection>
      <Text style={styles.contentStyle}>
        The Dnyanganga Sanctuary is situated 8 km from Buldhana and
        20 km from Khamgaon town of Maharashtra.
        It is close to the Buldhana Taluk of Buldhana District,
        near the Dnyanganga River. There are two lakes within the 205 sq km sanctuary.
        Leopards, sloth bears, barking deer, blue bulls, spotted deer,
        hyenas, jungle cats and jackals along with tigers give more attraction.
        About 150 species of birds are there. The ideal time to visit the
        sanctuary is from January to June. Wild animals are best sighted from
        February to May. The terrain is undulating, interspersed with hillocks
        having gentle slopes.
      </Text>
      </CardSection>
      </Card>

      <Card>
      <CardSection>
      <Text style={styles.headingStyle}>Katepurna Wildlife Sanctuary</Text>
      </CardSection>
      <CardSection>
      <Text style={styles.contentStyle}>

      </Text>
      </CardSection>
      </Card>
      </ScrollView>
    )
  }
}
const styles = {
  headingStyle: {
    fontSize: 18,
    color: 'white',
    padding: 10
  },
  contentStyle: {
    color: 'white',
    fontSize: 15,
    padding: 10
  }
};
export default Sanctuary;
