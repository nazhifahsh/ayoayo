import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity} from 'react-native'

export default class Splash extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')}>
        <Text> Tap to Continue </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
