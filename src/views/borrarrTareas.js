import React from 'react';
import {View, Text, StyleSheet, TouchbleOpacity} from 'react-native';
class BorrarTareas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       return(
         <View>
             <Text>LAS TAREAS BORRADAS SON: </Text>
         </View>
       ); 
    }
}
export default BorrarTareas;