import React from 'react';
import { StyleSheet, ScrollView, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import { Card, CardSection } from '../common';

class History extends React.Component {
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
    const TopContent = `<p><b>~ History of Melghat  : </b><br><br>Being a pioneer comes naturally to the beautiful landscape of Melghat which is nestled in the Satpuda hill ranges of Forsyth's and Dunbar's Central India.
    <br> When a tiger census was conducted in 1972 Indian Government was alarmed to find only 1800 tigers as against 20000 to 40000 estimated at the turn of the 20th century.This led the Government of India under the then Prime Minister Smt. Indira Gandhi to set up Project Tiger in 1973 on the matter of tiger conservation.
    <br> Nine tiger reserves were established in the first phase in the country during the year 1973-74. Melghat Tiger Reserve was one of these nine tiger reserves and came in to being on 22nd February 1974. Initially it was over an area of 1571.74 sq. km.
    <br>This was the first tiger reserve to be declared in the state of Maharashtra, which subsequently got expanded to 2029.04 sq. km. The mystic landscape of Melghat has vast tracts of inviolate natural forests consisting of unique and representative ecosystems with rich bio-diversity and varied habitats offered by deep valleys (locally known as 'khoras') and high hills (locally known as 'ballas'), daunted with rivers and 'nallahs having water all the year round in the 'dohs”.
    <br>Melghat was declared a tiger reserve and was among the first nine tiger reserves notified in 1973-74 under the Project Tiger. In 1985 Melghat Wildlife Sanctuary was created. Gugamal National Park, which forms the core area of the reserve, has an area of 361.28 km2. carved out in 1987.
    <br>There are passes in Melghat that invaders from the north traversed to reach Berar, where the Imad Shahi dynasty had been founded in 1484. The historic forts, Narnala and Gawilgarh, guarded the main east-west ridge. In 1803, in the Second Maratha War, Colonel Arthur Wellesley, who later became the Duke of Wellington, captured the Gawilgarh fort from the Marathas.</p>`;

    const middleContent = `<p><b>Name, Location, Constitution and Extent :</b><br><br>
    (i)  Name: The area of the Critical Tiger Habitat is 1500.49 Sq.Km., falling in the heart of the Melghats. Out of this, 1150.03 Sq.Km. (Gugamal and Melghat Sanctuary) belongs to the initially declared Melghat Tiger Reserve which was declared on 22nd February 1974 and the remaining area of three Wildlife Sanctuaries namely Wan, Ambabarwa and Narnala, added to it on 27/12/2007 now comprise the core area of the Critical Tiger Habitat of the Melghat Tiger Reserve
    (ii) Location: Situated in Satpuda hill ranges of Central India, the area of Critical Tiger Habitat of the Melghat Tiger Reserve lies in Melghat forests of Amravati, Akola and Buldhana Districts of Vidarbha region of Maharashtra, bordering Madhya Pradesh in the North and East.
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

export { History };
