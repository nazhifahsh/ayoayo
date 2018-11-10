import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import bgImage from '../src/image/Galaxy.jpg'



export default class Konsul extends Component {
  render() {
    return (
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
      <View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
          style={styles.touch}>
        <Text>Ustad Aulia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
          style={styles.touch}>
        <Text>Ustad Fauzan</Text>
        </TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
          style={styles.touch}>
        <Text>Ustad Hermawan</Text>
        </TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
          style={styles.touch}>
        <Text>Ustad Andri</Text>
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
       shadowColor:'#000',
       shadowOffset:{width:0, height:2},
       shadowOpacity:0.8,
       shadowRadius:2,
       elevation: 1,
       
    },
    touch:{
      width:350,
      height:45,
      borderRadius: 25,
      backgroundColor: '#9afdff',
      justifyContent: 'center',
      alignItems:'center',
      shadowColor:'#000',
       shadowOffset:{width:0, height:2},
       shadowOpacity:0.8,
       shadowRadius:2,
       elevation: 4,
      marginTop:20,
      opacity:0.8
    },
    });

