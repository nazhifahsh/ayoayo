import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import bgImage from '../src/image/Galaxy.jpg'

const {width: WIDTH}= Dimensions.get('window')

export default class Konsul extends Component {
  render() {
    return (
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
      <View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('UstAulia')}
          style={styles.touch}>
        <Text>Ustad Aulia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UstBurhan')}
          style={styles.touch}>
        <Text>Ustad Burhan</Text>
        </TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('UstFauzan')}
          style={styles.touch}>
        <Text>Ustad Fauzan</Text>
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
      width:WIDTH - 60,
      height:45,
      borderRadius: 25,
      backgroundColor: '#9afdff',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:20,
      opacity:0.8
    },
    });

