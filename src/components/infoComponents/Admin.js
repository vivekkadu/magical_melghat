import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Card, CardSection } from '../common';

class Admin extends React.Component {
  render() {
    const TopContent = `<p><b>~ Administrative Control : </b><br><br> The entire area of Melghat Tiger Reserve is administratively controlled by Chief Conservator of Forests and Field Director having headquarter at Amravati. The area has been divided into three Wildlife Divisions; namely Sipna Wildlife Division, Paratwada, Gugamal Wildlife Division Paratwada and Akot Wildlife Division Akot. Entire area of the Reserve including the area of Wan, Ambabarwa and Narnala sanctuaries along with 3 Deputy Conservator of Forests and their staff has been put under Directorate through the Government of Maharashtra Order No. WLP/1094/Pra 211/F-1/Dated 26th April 1999 for unified Control.</p>`;

    const middleContent = `<p><b>~ Legal Status of Gugamal National Park and Melghat Sanctuary :</b><br><br>
      Govt. of Maharashtra, Revenue& Forests Department vide Gazette Notification No. WLP 1978/10553 (9), F-5, Dated 5th September 1985, declared an area of 1597.23 sq km as Melghat Tiger Sanctuary . Govt. of Maharashtra Revenue & Forests Department vide Notification No./WLP-1086/18061/F-5/Dated 27 November, 1987 declared its intention to constitute an area of 361.80 sq. km.  as a National Park   The total area of Melghat Tiger Reserve was enhanced from 1597.23 sq. km. to 1624.30 sq km. on 27.11.1987.  Govt. of Maharashtra.  Revenue & Forests, Department vide Gazette Notification No. WLP- 1092/Pra-526/ F-5, dated 15.2.1994 reconstituted the area of Melghat Sanctuary to 1150.03 sq km on administrative grounds .  Reserve Forest area of Melghat Sanctuary has been finally notified as Melghat Sanctuary vide Notification No.W.L.P-10-2000, C.R- 41/F- 1/ dated 6th  November 2000 admeasuring 767.36 Sq km.  Final notification about Gugamal National Park has been issued vide No. WLP-1098/CR-135/F-1/Dated 8th August, 2000 admeasuring 361.28 sq km.</p>`
    return (
      <ScrollView>
      <Card>

      <HTMLView
        value={TopContent}
        stylesheet={styles}
      />
      </Card>

      <Card style={{ marginTop: 10 }}>
      <HTMLView
        value={middleContent}
        stylesheet={styles}
      />
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    color: 'black',
justifyContent: 'center',
paddingLeft: 10,
paddingTop: 13,
paddingBottom: 13,
alignSelf: 'center',

    // make links coloured pink
  },
});

export { Admin };
