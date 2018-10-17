import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Dimensions, ImageBackground } from 'react-native'
import bgImage from '../src/image/Wave.jpg'

const {width: WIDTH}= Dimensions.get('window')
export default class Menu extends Component {
  render() {
    return (
        <ImageBackground source={bgImage}
        style={styles.backgroundContainer}>
      <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Doa')}
          style={styles.touch}>
        <Text>Kumpulan Doa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}
        style={styles.touch}>
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
})
