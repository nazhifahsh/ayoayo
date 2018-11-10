import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity, Linking, ImageBackground} from 'react-native'
import Communications from 'react-native-communications';
import {Style} from './design';

export default class UstBurhan extends Component {
    render() {
      return (
        <View style={{flex:1}}>
        <View style={Style.atas}>
        <ImageBackground source={require('./ustburhann.jpg')} style={{width:360, height:150,justifyContent:'flex-end'}}>
        </ImageBackground>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=> Communications.phonecall('081296078164'.no, true)}>
        <View style={Style.touch}>
        <Text style={Style.text}>Call</Text>
        <Image source={require('./calll.png')} style={Style.img}/>
        </View>
        </TouchableOpacity>
        </View>
      
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>  Communications.text('081296078164')}>
        <View style={Style.touch}>
        <Text style={Style.text}>SMS</Text>
        <Image source={require('./smsss.png')} style={Style.img}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={Style.bawah}>
        <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?phone=6281296078164')}>
        <View style={Style.touch}>
        <Text style={Style.text}>WhatsApp</Text>
        <Image source={require('./whatsapp-128.png')} style={{ width:60, 
          height:60,
          alignItems:'baseline',
          marginLeft:70,
          marginTop:18}}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={{flex:2, backgroundColor:'#202021'}}></View>
        </View>
      )
    }
  }