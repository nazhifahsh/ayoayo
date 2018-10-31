
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground,Image} from 'react-native';
import doa from './doa';
import bgImage from '../src/image/bluesky.jpg'
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
        marginTop:10,
        width:'80%',
        alignSelf:'center',
        textAlignVertical:'center',
       fontSize:20,  
        backgroundColor:'#048abf',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        height:70,
        marginBottom:20,
      
        
        
    },
    latin:{
        width:'100%',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        height:40,
        backgroundColor:'#0099c3'

    },

    tombol:{
        width:40,
        height:40,
        marginTop:15

    },
    
    tombol4:{
        width:40,
        height:40,
        borderRadius:40 ,
        marginTop:15
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
          <Text style={{marginTop:20, fontSize:30}}> {JSON.stringify(isi)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(latin)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(arti)}</Text>
          <TouchableOpacity onPress={() =>SoundPlayer.playSoundFile('cant_take_my_eyes_off_you','mp3')}>
     <Image source={require('./play.png')} style={styles.tombol}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>SoundPlayer.stop()} >
        <Image source={require('./stop.png')} style={styles.tombol}/>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.pause()} >
        <Image source={require('./pause.png')} style={styles.tombol}/>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.resume()} >
        <Image source={require('./resume.jpg')} style={styles.tombol4}/>
    </TouchableOpacity>
   
          
       </ScrollView>
        </View>
    </ImageBackground>
        );
      }
    }
