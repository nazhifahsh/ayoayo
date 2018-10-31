import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,TouchableOpacity, Image, ImageBackground, AppState} from 'react-native'
import bgImage from '../src/image/Starsnight.jpg'
import Logo from '../src/image/Book3.png'
import PushController from './PushController'
import PushNotification from 'react-native-push-notification'

const {width: WIDTH}= Dimensions.get('window')
export default class Splash extends Component {
  constructor(props){
    super(props);
  
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state={
      seconds: 2
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

 
  handleAppStateChange(appState) {
    if (appState === "background"){
      PushNotification.localNotificationSchedule({
        smallIcon: "ic_notification",
        message: "Ayo kita berdoa", 
        date: new Date(Date.now() + (660*1000)) ,
        repeatType:'day',
        
        number:0,
        userInfo: { id: new Date(Date.now()), },
        
        
      });
      
    
    }
  }
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer}
      source={bgImage}>
      <View>
      <Image source={Logo} style={styles.logo}/>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')}>
        <Text style={{fontFamily:'Poppins-Light'}}> Tap to Continue </Text>
        </TouchableOpacity>
        <PushController/>
      </View>
      </ImageBackground>
    
    )
  }
}

const styles = StyleSheet.create({
backgroundContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: null,
   height:null
},
title:{
  color:'#ffffff',
  fontSize:50,
  fontWeight: '500' ,
  marginTop: 10,
  opacity:0.5
},
  logo:{
      width: 100,
      height:  100,
      borderRadius:20,
      marginBottom: 40,
},
logoText:{
  color:'#ffffff',
       fontSize:20,
       fontWeight: '500',
       marginTop: 10,
       opacity:0.7
   }, 
     logoContainer:{
      alignItems: 'center',
           marginBottom: 50
       },
       continue:{
          width:350,
          height:80,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems:'center',
          marginTop:20
      },

    });