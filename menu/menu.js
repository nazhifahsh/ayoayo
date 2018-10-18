import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Dimensions,Image, ImageBackground,  } from 'react-native'
import bgImage from '../src/image/blackg.jpg'
import Logo from '../src/image/Book3.png'
import {BoxShadow} from 'react-native-shadow'


export default class Menu extends Component {
  render = ()=> {
    const shadowOpt = {
      width:160,
      height:170,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
  }
    return (
        <ImageBackground source={bgImage}
        style={styles.backgroundContainer}>

        <View>
          <Image source={Logo} 
          style={styles.logo}/>
          <Text style={styles.logoText}>
          Nama Aplikasi
          </Text>
        </View>

      <View style={{flexDirection:'row'}}>
      <BoxShadow setting={shadowOpt}>
      
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Doa')}
          style={styles.touch}>
        <Text>Kumpulan Doa</Text>
        </TouchableOpacity>
        </BoxShadow>
        <BoxShadow setting={shadowOpt}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
        style={styles.touch2}>
        <Text>Konsultasi Syariah</Text>
        </TouchableOpacity>
        </BoxShadow>
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
  logo:{
    width: 100,
    height:  100,
    borderRadius:20,
    marginBottom:5,
},
logoText:{
  color:'#ffffff',
       fontSize:20,
       fontWeight: '500',
       marginTop: 10,
       marginBottom:30,
       opacity:0.7
   },
  touch:{
    width:150,
    height:90,
    borderRadius: 25,
    backgroundColor: '#9afdff',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:20,
    shadowColor:'#2db7fd',
    shadowOpacity:0.5,
    shadowOffset:{width:170, height:110},
    marginLeft:20,
    opacity:0.8
},
touch2:{
  width:150,
  height:90,
  borderRadius: 25,
  backgroundColor: '#7192ff',
  justifyContent: 'center',
  alignItems:'center',
  marginRight:20,
  marginLeft:20,
  opacity:0.8
},
})
