
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image,ImageBackground} from 'react-native';
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
         padding:10

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
        marginLeft:20
    
    },
    arab:{
        marginTop:20,
        fontSize:20,
        textAlign:'center'
    },
    audio:{
        flexDirection:'row',
        backgroundColor:'#37D0A9',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        height: 50
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
            <View style={styles.audio}>
          <TouchableOpacity onPress={() =>SoundPlayer.playSoundFile('cant_take_my_eyes_off_you','mp3')}>
     <Image source={require('./play.png')} style={styles.tombol}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>SoundPlayer.stop()}>
        <Image source={require('./stop.png')} style={styles.tombol}/>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.pause()} >
        <Image source={require('./pause.png')} style={styles.tombol}/>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() =>SoundPlayer.resume()} >
        <Image source={require('./pp.png')} style={styles.tombol}/>
    </TouchableOpacity>
    </View>
          <Text style={styles.dzikir}> {JSON.stringify(subject)}</Text>
          <Text style={styles.arab}> {JSON.stringify(isi)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(latin)}</Text>
          <Text style={{marginTop:20}}> {JSON.stringify(arti)}</Text>
         
   
          
       </ScrollView>
        </View>
    </ImageBackground>
        );
      }
    }
