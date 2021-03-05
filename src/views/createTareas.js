import React from 'react';
import {View, Text, StyleSheet, TouchbleOpacity, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import VectorIcons from 'react-native-vector-icons/AntDesign';
class CreateTareas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return ( 
         <View style={styles.container} >
            <View style={styles.inputtext} >
              <VectorIcons name="fork" 
              size={24} 
              color={Color[Color.key].thirthcolor} />
              <TextInput style={styles.TextInputcolor} />
            </View> 
         </View>
       );
    }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: Color[Color.key].maincolor,
      alignItems: 'center',
  },
  inputtext: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: Color[Color.key].secondcolor,
    width:'85%',
    borderRadius:10,
  },
  TextInputcolor: {
    color: Color[Color.key].fourthcolor,
    textAlign: 'center',
  },
});
export default CreateTareas;