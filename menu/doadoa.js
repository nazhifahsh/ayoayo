
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import doa from './doa';
import SoundPlayer from 'react-native-sound-player'

const styles= StyleSheet.create({
    dzikir:{
        backgroundColor:'#52cff2',
        justifyContent:'center',
        alignItems:'center'
        
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
        <View>
            <ScrollView>
          <Text style={styles.dzikir}> {JSON.stringify(subject)}</Text>
          <Text> {JSON.stringify(isi)}</Text>
          <Text> {JSON.stringify(latin)}</Text>
          <Text> {JSON.stringify(arti)}</Text>
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
        
        );
      }
    }
