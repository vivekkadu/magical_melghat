import React, { Component } from 'react';
import { ScrollView, Text, Image, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import { Card, CardSection } from './common';


class Rules extends Component {
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
    const tableHead = ['    Gate Name', '  \n     Morning  |  Evening'];
    const tableData = [
      [' 1. Chikhaldara/Vairat', '         20        |      20'],
      [' 2. Semadoh', '         20        |      20'],
      [' 3. Harisal', '         20        |      20'],
      [' 4. Shahanur/Narnala', '         08        |      08'],
      [' 5. Dhargadh', '         22        |      21'],
      [' 6. Ambababarwa / Wasali', '         22        |      21'],
      [' 7. Wan / Zari', '         22        |      21']
    ];

    const timingtableHead = ['  Gate Name', '  \n     Morning  |  Evening'];
    const timingtableData = [
      ['Chikhaldara/Vairat', '         20        |      20'],
      ['Semadoh', '         20        |      20'],
      ['Harisal', '         20        |      20'],
      ['Shahanur/Narnala', '         08        |      08'],
      ['Dhargadh', '         22        |      21'],
      ['Ambababarwa / Wasali', '         22        |      21'],
      ['Wan / Zari', '         22        |      21']
    ];

    return (
      <ScrollView>

        <Card>

        <CardSection>
            <Image
             style={styles.imageStyle}
             source={require('../img/rate.png')}
            />
        </CardSection>

        <CardSection style={styles.CardSectionStyle}>
                 <Text style={styles.headingStyle}>
                  Vehicles Allowed/Day
                 </Text>
        </CardSection>

        <Table>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
         </Table>


   <CardSection style={styles.RulesCardSectionStyle}>

       <Text style={styles.headingStyle}>
        {"\t\t\t\t\t\t\t"}संरक्षित क्षेत्रे भ्रमती चे नियम {"\n"}
        {"\t\t"}Rules of Excursion in Protected Area</Text>

    </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
          <Text style={styles.rulesStyle}>
          1. अभयारण्य क्षेत्रात भ्रमंती करताना सर्व नियमांचे पालन करावे
          पालन न केल्यास वन्य जीव संरक्षण अधिनियम 1972 चे तरतुदीनुसार कारवाई करण्यात येईल.
          {"\n"}Abide by these park rules, dis-obedience will lead to legal action under WL
          (P) act, 1972.
        </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
          <Text style={styles.rulesStyle}>
          2. अभयारण्य क्षेत्रात शस्त्र / ज्वलनशील पदार्थसह प्रवेश करू नये.
          {"\n"}Dont enter the park with fire arms or explosive.
          </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
          <Text style={styles.rulesStyle}>
          3. अभयारण्य क्षेत्रात प्रवेश करण्याअगोदर रीतसर परवानगी प्राप्त करावी.
          {"\n"}Obtain a valid permit before entering the park.
          </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
          <Text style={styles.rulesStyle}>
          4. अभयारण्य क्षेत्रात सिगरेट/ बीडी किंवा माचिस घेऊन जाऊ नये .
          {"\n"}Dont carry cigarette or match box.
          </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                5. अभयारण्य क्षेत्रात धूम्रपान वर्जित आहे ,अभयारण्य क्षेत्रात शेकोटी
                पेटवून नये यामुळे आग  शकते .
                {"\n"}Dont smoke or light fire, it can cause forest fire.
                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                6. अभयारण्य क्षेत्रात ट्रान्झिस्टर टेप रेकॉर्डर वाद्य वाजविणे वज्र आहे .
                {"\n"}Dont carry or play trasnistor ortape recorder inslde the park.

                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                7. अभयारण्य क्षेत्र प्रत्येक वाहनासोबत अधिकृत मार्गदर्शन ( गाईड )
                घेऊन जाणे तसे त्यांच्या सूचनांचे पालन करणे अनिवार्य आहे .
                {"\n"}It is compulsory to take official guide
                with every vehicle and follow his instructions.

                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                8. अभयारण्य क्षेत्रात वाहन हळू चालवावे निर्धारित गती 20 किलोमीटर प्रतितास.
                {"\n"}Drive slow, recommended speed 20 Km/h.


                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                9. अभयारण्य क्षेत्रात हॉर्न वाजवू नये.
                {"\n"}Dont blow horn.
                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                10. अभयारण्य क्षेत्रात रिकामे डबे प्लास्टिक कॅरीबॅग तथा कचरा इत्यादी टाकू नये.
                 {"\n"}Dont litter with cans, bottles,
        plastic bags etc keep garbage in paper bag provided and dispose off safely outside the park.

                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                11. अभयारण्य क्षेत्रात पिण्याचे पाणी स्वतः घेऊन जावे .
                 {"\n"}Always carry drinking water.
                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                12. अभयारण्य क्षेत्रातून वनसंपदा किंवा वन्य प्राणी प
                शू-पक्षी घेऊन जाऊ नये किंवा इजा पोहोचू नये.
                 {"\n"}Dont remove any forest property including plants or animals from the park.

                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                13. अभयारण्य क्षेत्रातील स्मृती तथा छायाचित्रे अवश्य घेऊन झाले.
                 {"\n"}Take nothing back except photos and memories.
                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                14. अभयारण्य क्षेत्रात भ्रमती करताना शांती व अनुशासनाचे पालन करावे.
                 {"\n"}Maintain silence & discipline during excursions.
                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                15. अभयारण्य क्षेत्रात वन्य प्राण्यांचा जाण्याचा अधिकार पहिला आहे
                त्यांच्या मार्गांमध्ये अडथळा निर्माण करू नये.
                 {"\n"}Animals have the right of the way, wait till they cross the road

                </Text>
      </CardSection>

      <CardSection style={styles.ruleContainerStyle}>
                <Text style={styles.rulesStyle}>
                16. अभयारण्य क्षेत्रात वन्यप्राण्यांचा पाठलाग करू नये किंवा त्यांना त्रास देऊ नये.
                 {"\n"}Dont chase or tease animals or try to feed them.
                </Text>
      </CardSection>

         </Card>

    </ScrollView>

    );
  }
}
const styles = {
  headingStyle: {
  color: 'white',
  padding: 5,
  fontSize: 18
  },
  imageStyle: {
    height: 170,
    flex: 1,
    padding: 5
  },
  head: { height: 35, backgroundColor: 'white' },
  text: { marginLeft: 5, color: 'black', fontSize: 14, justifySelf: 'center' },
  row: { height: 20, backgroundColor: 'white' },

  CardSectionStyle: {
    marginTop: 15,
    marginBottom: 2,
     borderRadius: 20
  },
  RulesCardSectionStyle: {
    marginTop: 15,
    marginBottom: 5,
     borderRadius: 20,
     flexDirection: 'column'
  },
  ruleContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  backgroundColor: 'white'
  },
  rulesStyle: {
    color: 'black',
    fontSize: 14,
    padding: 10
  }
};
export default Rules;
