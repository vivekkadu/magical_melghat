import React from 'react';
import {View,Text} from 'react-native';

const CardSection =(props)=>{

return (

	<View style={[styles.containerStyle, props.style]}>{props.children}</View>
	);


};

const styles={

   containerStyle:{

      borderBottomWidth: 1,
			borderRadius: 6,
			padding: 0,
      backgroundColor: '#1E861F',
      justifyContent: 'center',
      flexDirection: 'row',
      borderColor: 'white',
      position: 'relative'

   }

};

export { CardSection };
