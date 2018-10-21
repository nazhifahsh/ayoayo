import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Dimensions, ImageBackground,Image,   } from 'react-native'
import bgImage from '../src/image/Wave.jpg'
import logo from '../src/image/Book3.png'
import icon1 from '../src/image/viewlist.png'
import icon2 from '../src/image/bphone.png'



export default class Menu extends Component {
  render() {
    return (
        <ImageBackground source={bgImage}
        style={styles.backgroundContainer}>
        <Image source={logo}
        style={styles.logo}/>
        <Text style={styles.logoText}>
        Nama Aplikasi</Text>
      <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Doa')}
          style={styles.touch} >
          <Image source={icon1}/>
        <Text>Kumpulan Doa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
        style={styles.touch2}>
        <Image source={icon2}/>
        <Text>Konsultasi Syariah</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('QandA')}
        style={styles.touch}>
        <Text>Q&A</Text>
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
     height:null,   

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
       fontFamily: 'spook' ,
       marginBottom:30,
       opacity:0.7
   },
  touch:{
    width:150,
    height:110,
    borderRadius:14,
    marginRight:10,
    backgroundColor: '#9afdff',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:20,
    opacity:0.8,
    borderBottomWidth:5,   
    borderBottomColor:'#81d8da',
    shadowColor:'#000',
    shadowOffset:{width:9, height:10},
    shadowOpacity:3,
    borderBottomWidth:6,
  borderBottomEndRadius:6,
  borderBottomStartRadius:6, 
    shadowRadius:9,
    elevation: 20,
},
touch2:{
  width:150,
  height:110,
  marginRight:10,
  borderRadius: 14,
  backgroundColor: '#7192ff',
  justifyContent: 'center',
  alignItems:'center',
  marginTop:20,
  opacity:0.8,
  shadowColor:'#000000',
  shadowOffset:{width:3, height:8},
  shadowOpacity:3,
  shadowRadius:9,
  elevation: 20,
  borderBottomWidth:6,
  borderBottomEndRadius:6,
  borderBottomStartRadius:6, 
  borderBottomColor:'#5974ce',
  shadowColor:'#000',
},
})
