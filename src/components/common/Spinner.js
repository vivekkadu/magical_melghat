import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = (props) => {
return (
<View style={[styles.SpinnerStyle, props.style]}>
<ActivityIndicator color="#1E861F" size='large' />
</View>
);
};

const styles = {
  SpinnerStyle: {
   //flex: 1,
   marginTop: 200,
   justifyContent: 'center',
   alignItems: 'center'

  }
};
export {Spinner};
