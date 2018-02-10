import React from 'react';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

const DrawerLink = (props) => {
    return (

      <Card style={styles.CardStyle}>
          <CardSection style={styles.CardSectionStyle}>
          <Icon iconStyle={styles.iconStyle} name={props.iconname} />
          </CardSection>
         <CardSection style={styles.RightCardSectionStyle}>
                <Text style={styles.linkStyle}>{props.linkname}</Text>
         </CardSection>
       </Card>

    );
  };

const styles = {
  iconimgStyle: {
    height: 30,
    width: 30,
    marginLeft: 5,
    marginBottom: 5
  },
  iconStyle: {
    fontSize: 30,
    color: '#808080',
    marginLeft: 5

  },
  linkStyle: {
    fontSize: 18,
    color: 'black',

    },
    CardSectionStyle: {
      backgroundColor: 'white',

    },
    RightCardSectionStyle: {
      backgroundColor: 'white',
      flex: 1,
      marginLeft: 20,
      justifyContent: 'flex-start'

    },
    CardStyle: {
      marginBottom: 0,
      flexDirection: 'row',
      borderBottomWidth: 1,
    }
};
export default DrawerLink;
