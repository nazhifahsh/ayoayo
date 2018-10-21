import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,TouchableOpacity, Image, ImageBackground} from 'react-native'
import bgImage from '../src/image/Greenbluegra.jpg'
import Logo from '../src/image/Book3.png'


const {width: WIDTH}= Dimensions.get('window')
export default class Splash extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer}
      source={bgImage}>
      <View>
      <Image source={Logo} style={styles.logo}/>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')}>
        <Text style={{fontFamily:'Poppins-Light'}}> Tap to Continue </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    )
  }
}

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
      borderRadius:20,
      marginBottom: 40,
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