import React, { Component } from 'react';
import { ScrollView, Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import { Card, CardSection } from '../common';

class Forts extends Component {
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
    const TopContent = `<p><b>~ Narnal Fort : </b><br><br>Narnala, also known as "Shahnur Fort", is a hill fortress in Maharashtra, India, named after the Rajput Ruler Narnala Singh. The fort was first established in 10 century A.D. by Gond Kings. In the 15th Century it was occupied and rebuilt by the Mughals, becoming one of Berar Subah's thirteen sarkar.
    <br>It consists of three small forts: Zafarabad (or Jafarabad) fort on the east, Narnala in the centre and Teliagarh to the west. The lake within the centre of the complex is said to possess healing properties and according to legend contained the philosopher's stone, though no stone was found when the lake dried up in the drought and Indian famine of 1899-1900.
    <br>Occupied since at least the Khalji dynasty, the fort is well known for the Muslim saint Hazrat Burhanuddin "Bagh Sawar Wali", and it is said that many white tigers were seen with him at that time. Adli Beg or Atalu Beg carved many Arabic inscriptions into the fort and the Kadak Bijli cannon. It is also the birthplace of the Mughal Aurangzeb's great grandson.<br>
    <br><b>Location</b>
    <br>The fort is located in the Akot Taluka of Akola district, Berar at coordinates of 20.703 N and 76.997 E. The closest city is Akot, which is 18 km away. It is at the southernmost tip of the Satpura Hills at an elevation of 912 meters above sea level. Currently the fort falls within the Melghat Tiger Reserve.
    <br><b>History</b>
    <br>After his expedition across the Gangetic plains in 1017, of Al-Biruni to compose his Tarikh Al-Hind in order to understand the Indians and their beliefs The Narnala fort / Shahnur fort built by the Sultan Mahmoud Gazhnavi because he is a follower of Bagh-sawar wali Hazrat Burhanuddin the maintain after Imad shahi dynasty and after this Akbar invaded Berar maintained by Mughals. Mughals recreated the Narnala Fort with Mughal architecture and built mosque at the fort.By his killedar, Shah Dulha Rehman Ghazi of Ellichpur (now Achalpur) was maternal cusion of sultan Mehmoud Ghaznavi and maternal grand son of sultan Nasiruddin Alaptagueen he was marched for battle against rajah Eil.Through the route of Shahnur fort he was stay here threefold night and pray.
     <br>Ahmad Shah Bahamani got the fort repaired around 1425 when he constructed Gavilgad with a view to obstructing the invaders from the north frontier of his kingdom. Nearly all the present buildings seem to be of Islamic origin. The fort passed on to Fathullah Imad-ul-Mulkwhen he became an independent ruler by 1490 as he was the Subhedar of Berar under the Bahamanis. Gavilgad also passed on to him. Burhan Imad Shah was imprisoned on this fort by one of his Amirs Tufalkhan who crowned himself. In the battle that was fought between Tufalkhan and Murtaza Nizam Shah in 1572 Tufalkhan was defeated and had to flee and took asylum with Muhammad Shah of Khandesh. On being threatened by Murtaza Nizam Shah of dire consequences if the asylum was continued, Muhammad Shah of Khandesh, refused to give refuge to Tufalkhan who was forced to return to Narnala fort and stay there. The fort was invested by the army of Murtaza. The fort surrendered and Tufalkhan and also Burhan Imad Shah were imprisoned along with 40 others. They were confined in the fort of Lohagad where they died while in captivity. Some historians say that all of them were poisoned under the orders of Murtaza Nizam Shah. After the battle that was fought between the armies of the Ahmadnagar kingdom and the Emperor Akbar on 26 January 1597 in which the armies of the Adilshahi Emperor who along with the Kutub Shah of Golconda was an ally of Nizamshah emerged successful. The fort can now ho ascended by a motorable road. About halfway up it crosses first one and then another piece of level ground, each thickly sprinkled with Islamic tombs.</p>`


    return (
        <ScrollView>
        <Card>
        <CardSection>
        <HTMLView
          value={TopContent}
          stylesheet={styles}
        />
        </CardSection>
        </Card>
        </ScrollView>
      );
    }
  }

  const styles = {
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
  };

export { Forts };
