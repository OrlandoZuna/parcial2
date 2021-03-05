import React from 'react';
import {View, Text, StyleSheet, TouchbleOpacity} from 'react-native';
class MostrarTareas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       return(
         <View>
             <Text> LAS TAREAS CREADAS SON:</Text>
         </View>
       ); 
    }
}
export default MostrarTareas;