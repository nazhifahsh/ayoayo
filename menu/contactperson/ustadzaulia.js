import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity, Linking } from 'react-native'
import Communications from 'react-native-communications';


 export default class UstAulia extends Component {
    render() {
      return (
        <View style={{flex:1}}>
        <View style={styles.atas}>
        <Text style={styles.judul}>
        {dt.ust[0].nama}
        </Text>
        </View>
        <View style={styles.bawah}>
        <TouchableOpacity onPress={()=> Communications.phonecall('085256806257', true)}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={styles.text}>Call</Text>
        <Image source={require('./call.png')} style={{width:40, height:40,alignSelf:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.bawah}>
        <TouchableOpacity onPress={()=>  Communications.text('085256806257'.no)}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={styles.text}>SMS</Text>
        <Image source={require('./message.png')} style={{width:40, height:40,alignItems:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.bawah}>
        <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?phone=6285256806257')}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={styles.text}>WhatsApp</Text>
        <Image source={require('./WhatsApp_Icon.png')} style={{width:40, height:40,alignItems:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  atas:{
    flex:3,
    alignItems: 'center',
    backgroundColor:'grey',
    justifyContent: 'center'
  },
  judul:{
    fontSize:50,
    color:'white',
    fontFamily:'Dillova'

  },
  bawah:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'black'
  },
  text:{
    color:'white',
    fontSize:30
  }
})
