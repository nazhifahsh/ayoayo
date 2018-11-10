import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Dimensions,Image, ImageBackground,  } from 'react-native'
import bgImage from '../src/image/blackg.jpg'
import Logo from '../src/image/Book3.png'
import icon1 from '../src/image/viewlist.png'
import icon2 from '../src/image/bphone.png'

const {width: WIDTH}= Dimensions.get('window')
export default class Menu extends Component {
  render() {
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
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Doa')}
          style={styles.touch}>
          <Image source={icon1}/>
        <Text>Kumpulan Doa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
        style={styles.touch2}>
        <Image source={icon2}
        style={{borderRadius:10}}/>
        <Text>Konsultasi Syariah</Text>
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
    width:160,
    height:110,
    borderRadius: 25,
    backgroundColor: '#9afdff',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:20,
    marginLeft:20,
    opacity:0.8,
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.8,
    shadowRadius:2,
    elevation: 4,
},
touch2:{
  width:160,
  height:110,
  borderRadius: 25,
  backgroundColor: '#7192ff',
  justifyContent: 'center',
  shadowColor:'#ff6070',
  shadowOffset:{width:0, height:2},
  shadowOpacity:0.8,
  shadowRadius:2,
  elevation: 9,
  alignItems:'center',
  marginRight:20,
  marginLeft:20,
  opacity:0.8
},
})
