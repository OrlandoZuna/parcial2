/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import { Text, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
     View,
     Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import VectorIcons from 'react-native-vector-icons/AntDesign';
 import Color from './layout/colors.js';
 import CreateTareas from './views/createTareas.js';
 import ListarTareas from './views/ListTareas.js';
 import BorrarTareas from './views/borrarrTareas.js';
 import MostrarTareas from './views/mostrartareas.js';
 const Tab = createBottomTabNavigator();
 class App extends React.Component{
   constructor(props){
     super(props)
   }
   ListarTareas() {
     return <ListarTareas />;
   }
   CreateTareas() {
    return <CreateTareas />;
  }
  MostrarTareas() {
    return <MostrarTareas />;
  }
  BorrarTareas() {
   return <BorrarTareas />;
 }
    render() {
     return (
       <NavigationContainer
       ScreenOptions={({route}) => ({
       tabBaricoIcon: ({focused, color, size}) => {
         let IconName;
         switch(route.name) {
           case 'lista de tarea': {
             if (focused) {
               return (
                <VectorIcons 
                name='appstore1' 
                size={23} 
                color={Color.option1.secondcolor} />
               );
             }
             else{
               return (
                <VectorIcons 
                name='appstore1' 
                size={23} 
                color={Color.option1.thirthcolor} />
               );
             }
           }
           case 'crear tarea': {
            if (focused) {
              return (
               <VectorIcons name='tool'
                size={23} 
                color={Color[Color.key].secondcolor} />
              );
            }
            else{
              return (
               <VectorIcons name="tool" 
               size={23} 
               color={Color.option1.forthcolor} />
              );
            }
          }
         }
       }, 
      })}>
         <Tab.Navigator>
           <Tab.Screen name="lista de tarea" component={this.ListarTareas} />
           <Tab.Screen name="crear tarea" component={this.CreateTareas} />
           <Tab.Screen name="mostrar tareas" component={this.MostrarTareas} />
           <Tab.Screen name="borrar tarea" component={this.BorrarTareas} />
         </Tab.Navigator>
       </NavigationContainer>
     );
   }
  }
  export default App;
  