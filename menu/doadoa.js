
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import doa from './doa';
import bgImage from '../src/image/Greenbluegra.jpg'
import SoundPlayer from 'react-native-sound-player'

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
         height:null,

    },
    dzikir:{
       fontSize:20,
       marginTop:20,
       borderBottomWidth:2,
       borderTopColor:'black',
        justifyContent: 'center',
        alignItems:'baseline',
        textAlign:'center',
        width:'100%',
        height:50,
        
        
    },
    latin:{
        width:'100%',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        height:40,
        backgroundColor:'#0099c3'

    }
})


export default class doadoa extends Component {
   
    render() {
      const { params } = this.props.navigation.state;
      const subject = params ? params.subject : null;
      const latin= params ? params.latin : null;
      const arti = params ? params.arti : null;
      const isi = params ? params.isi : null;

  
      return(
    <ImageBackground source={bgImage}style={styles.container}>
        <View style={styles.container}>
            <ScrollView>
          <Text style={styles.dzikir}> {JSON.stringify(subject)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(isi)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(latin)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(arti)}</Text>
          <TouchableOpacity onPress={() =>SoundPlayer.playSoundFile('cant_take_my_eyes_off_you','mp3')}>
     <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>SoundPlayer.stop()} >
        <Text>Stop</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.pause()} >
        <Text>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.resume()} >
        <Text>Resume</Text>
    </TouchableOpacity>
          
       </ScrollView>
        </View>
    </ImageBackground>
        );
      }
    }
