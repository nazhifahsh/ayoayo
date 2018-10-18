import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity, Linking } from 'react-native'
import Communications from 'react-native-communications';
import {Style} from './design';


 export default class UstAulia extends Component {
    render() {
      return (
        <View style={{flex:1}}>
        <View style={Style.atas}>
        <Text style={Style.judul}>
        Ustadz Aulia
        </Text>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=> Communications.phonecall('085256806257', true)}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={Style.text}>Call</Text>
        <Image source={require('./call.png')} style={{width:40, height:40,alignSelf:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>  Communications.text('085256806257')}>
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={Style.text}>SMS</Text>
        <Image source={require('./message.png')} style={{width:40, height:40,alignItems:'flex-end'}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?phone=6285256806257')}>
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



