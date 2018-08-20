import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//getting whenPress props from parent component in AlbumDetail
const Button =({onPress,children})=>{

  const {buttonStyle,textStyle}=styles;

return(
//passing whenPress to onPress prop of TouchableOpacity

<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style={textStyle}>
{children}
</Text>
</TouchableOpacity>

);
};

const styles ={

buttonStyle:{
flex:1,
alignSelf:'stretch',
backgroundColor:'white',
borderRadius:5,
borderWidth: 0.5,

borderColor:'#1E861F',
marginLeft:5,
marginRight:5
},

textStyle:{

  alignSelf:'center',
  color:'#1E861F',
  fontSize:16,
  fontWeight:'600',
  paddingTop:10,
  paddingBottom:10
}

};

export { Button };
