
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import doa from './doa';
import bgImage from '../src/image/bluesky.jpg'
import SoundPlayer from 'react-native-sound-player'

export default class doadoa extends Component {
   constructor(props){
       super(props);
       this.state={
           pencet:()=>SoundPlayer.playSoundFile('cant_take_my_eyes_off_you','mp3'),
       }
   }
   klik=()=>{
       SoundPlayer.pause()
       this.setState({
           pencet:()=>SoundPlayer.resume()
       })
   }
   kliik=()=>{
        SoundPlayer.stop()
        this.setState({
            pencet:()=>SoundPlayer.playSoundFile('cant_take_my_eyes_off_you','mp3')
    })
   }
    render() {
      const { params } = this.props.navigation.state;
      const subject = params ? params.subject : null;
      const latin= params ? params.latin : null;
      const arti = params ? params.arti : null;
      const isi = params ? params.isi : null;

  
      return(
        <View style={styles.container}>
            <ScrollView >
            <View style={styles.audio}>
          <TouchableOpacity onPress={this.state.pencet}>
     <Image source={require('./playy.png')} 
     style={{ width:60,
             height:60, 
             marginRight:5}}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={this.kliik}>
        <Image source={require('./stopp.png')} style={styles.tombol}/>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={this.klik} >
        <Image source={require('./pausee.png')} 
        style={{ width:60,
            height:60, 
            marginLeft:5}}/>
    </TouchableOpacity>
    </View>
          <Text style={styles.dzikir}> {JSON.stringify(subject)}</Text>
          <Text style={styles.arab}> {isi}</Text>
          <Text style={styles.latinn}> {JSON.stringify(latin)}</Text>
          <Text style={styles.arti}> {JSON.stringify(arti)}</Text>
         
   
          
       </ScrollView>
        </View>
        );
      }
    }


    const styles= StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: null,
             height:null,
            
             backgroundColor:'#99ccff'
    
        },
        dzikir:{
            marginTop:10,
            width:'80%',
            alignSelf:'center',
            textAlignVertical:'center',
            fontSize:30,  
            backgroundColor:'#bbeeff',
            justifyContent: 'center',
            alignItems:'center',
            textAlign:'center',
            height:70,
            marginBottom:20,
            fontFamily:'AsparagusSprouts',
            borderRadius:8
          
            
            
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
            width:28,
            height:28, 
        
        },
        arab:{
            marginTop:20,
            fontSize:19,
            textAlign:'center',
        },
        audio:{
            flexDirection:'row',
            backgroundColor:'#bbeeff',
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            height: 50,
            width:'50%',
            marginTop:10,
            alignSelf:'center'
            
        },
        latinn:{
            marginTop:20,
            textAlign:'center',
            fontFamily:'AnisaSans',
            fontSize:16
    
        },
        arti:{
            marginTop:20,
            fontFamily:'Poppins-Regular',
            textAlign:'center',
            fontSize:12.5
        }
    })