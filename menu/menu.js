import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'

export default class Menu extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Doa')}>
        <Text>Kumpulan Doa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konsul')}>
        <Text>Konsultasi Syariah</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
