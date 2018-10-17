//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {StackNavigator} from 'react-navigation'

import bgImage from '../image/Greenbluegra.jpg'
import Logo from '../image/Book3.png'
// create a component
export default class SplashScreen extends Component {
    render() {
        return (<ImageBackground source={bgImage} style={styles.backgroundContainer}>
           
        
            <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo}/>
            <Text style={styles.logoText}>Doa Book</Text>
        </View>
        <TouchableOpacity style={styles.continue}
          >
            <Text>Press to continue</Text>
        </TouchableOpacity>
            </ImageBackground>
        );
    }
}

// define your styles
 
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
         height:null
      },
      title:{
        color:'#ffffff',
        fontSize:50,
        fontWeight: '500' ,
        marginTop: 10,
        opacity:0.5
},
        logo:{
            width: 100,
            height:  100,
            borderRadius:20
     },
     logoText:{
        color:'#ffffff',
             fontSize:20,
             fontWeight: '500',
             marginTop: 10,
             opacity:0.7
         }, 
           logoContainer:{
            alignItems: 'center',
                 marginBottom: 50
             },
             continue:{
                width:WIDTH - 60,
                height:45,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems:'center',
                marginTop:20
            },
     


});

//make this component available to the app

