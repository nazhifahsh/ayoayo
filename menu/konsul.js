import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native'


const {width: WIDTH}= Dimensions.get('window')

export default class Konsul extends Component {
  render() {
    return (
      <ImageBackground source={require('./n1.jpg')}
      style={styles.backgroundContainer}>
      <View style={{flex:2}}>
      <Image source={require('./kkons.jpg')} style={{width:360, height:200}}/>
      </View>
      <View style={{flex:3, flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('UstAulia')}
          style={styles.touch}>
           <Image source={require('./male2.png')} style={styles.mag}/>
        <Text style={styles.tik}>Ustadz Auliya</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UstBurhan')}
          style={styles.touch}>
          <Image source={require('./male2.png')} style={styles.mag}/>
        <Text style={styles.tik}>Ustadz Burhan</Text>
        </TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('UstFauzan')}
          style={styles.touch}>
           <Image source={require('./male2.png')} style={styles.mag}/>
        <Text style={styles.tik}>Ustadz Fauzan</Text>
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
    touch:{
      width:100,
      height:100,
      borderRadius: 100,
      backgroundColor: '#861E27',
      justifyContent:'flex-start',
      alignItems:'center',
      marginTop:20,
      opacity:0.8,
      margin:10
    },
    tik:{
      fontFamily:'AnisaSans',
      color:'white',
      paddingTop:8
    },
    mag:{
      width:40, 
      height:32, 
      marginTop:20
    }
    });

