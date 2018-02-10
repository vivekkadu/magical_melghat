import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Card, CardSection } from '../common';

class Admin extends React.Component {
  render() {
    const TopContent = `<p><b>~ Melghat Tiger Project : </b><br><br>The Melghat, nestling in the Satpuda hill ranges of Forsyth’s and Dunbar’s Central India’s vast tracts of inviolate natural forests, consisting of unique and representative ecosystems with rich biodiversity and varied habitats offered by deep valleys (locally known as khoras) and high hills (locally known as Ballas), daunted with rivers and nallahs having water all the year round in the ‘doh’, was the natural choice for the community of foresters in Maharashtra, when it came to choose an area for preserving it for posterity and for ensuring that the ‘Tiger’ the most magnificent and flagship of the Indian wild species, could sustain a viable population and survive for the eternity.
    <br>The fascinating landscape, its enchanting beauty and richness leave everlasting imprints on people visiting the area.Melghat Tiger Reserve is one of the earliest 9 Tiger Reserves established by the Government of India and is the First Tiger Reserve to be declared in the State of Maharashtra.It came into being on 22nd February, 1974.</p>`;

    const middleContent = `<p><b>~Name, Location, Constitution and Extent :</b><br><br>
    (i)  Name: The area of the Critical Tiger Habitat is 1500.49 Sq.Km., falling in the heart of the Melghats. Out of this, 1150.03 Sq.Km. (Gugamal and Melghat Sanctuary) belongs to the initially declared Melghat Tiger Reserve which was declared on 22nd February 1974 and the remaining area of three Wildlife Sanctuaries namely Wan, Ambabarwa and Narnala, added to it on 27/12/2007 now comprise the core area of the Critical Tiger Habitat of the Melghat Tiger Reserve
  <br> (ii) Location: Situated in Satpuda hill ranges of Central India, the area of Critical Tiger Habitat of the Melghat Tiger Reserve lies in Melghat forests of Amravati, Akola and Buldhana Districts of Vidarbha region of Maharashtra, bordering Madhya Pradesh in the North and East.
    <br>This area is geographically located as below.
       <br>Latitude:  Between 210  441  N  and  210  081 N
       <br>Longitude: Between 760  391  E  and  770  311 E</p>`
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

export { Admin };
