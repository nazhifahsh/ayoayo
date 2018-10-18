import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity, Linking } from 'react-native'
import Communications from 'react-native-communications';
import {Style} from './design';

export default class UstBurhan extends Component {
    render() {
      return (
        <View style={{flex:1}}>
        <View style={Style.atas}>
        <Text style={Style.judul}>
        {dt.ust[1].nama}
        </Text>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=> Communications.phonecall('081296078164'.no, true)}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={Style.text}>Call</Text>
        <Image source={require('./call.png')} style={{width:40, height:40,alignSelf:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>  Communications.text('081296078164'.no)}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={Style.text}>SMS</Text>
        <Image source={require('./message.png')} style={{width:40, height:40,alignItems:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?phone=6281296078164')}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={Style.text}>WhatsApp</Text>
        <Image source={require('./WhatsApp_Icon.png')} style={{width:40, height:40,alignItems:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        </View>
      )
    }
  }