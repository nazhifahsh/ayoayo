import React, { Component } from 'react';
import { StyleSheet,FlatList, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image, AppState } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import doa from './doa';
import bgImage from '../src/image/deermount.jpg'
import icon from '../src/image/magnifier32.png'
import { ListItem } from 'react-native-elements';
const cari = ['user.name', 'subject'];
 
export default class Doa extends Component {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  handleAppStateChange(appState) {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
      smallIcon: "ic_notification",
      message: "Selamat, udah nunggu", 
      date:new Date(Date.now()+(3 * 1000))
      });
    }
  }


  render() {
    const filteredEmails = doa.filter(createFilter(this.state.searchTerm, cari))
    return (
      
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
      <View >
        <View style= {styles.SectionStyle}>
        <Image source={icon} style={styles.ImageStyle} />
        <SearchInput 
         onChangeText={(term) => { this.searchUpdated(term) }} 
         
          placeholder="Type here to search"
          >
          </SearchInput>
          
          </View>
        <ScrollView>
        {filteredEmails.map(doa => {
          return(
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('doadoa',{name:doa.name})} style={styles.emailItem}>
      <ListItem
        title={doa.subject}
        style={styles.list}
      />   
      </TouchableOpacity>

        )})
    }
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}
 
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
     height:null, 
  },
  emailItem:{
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 14,
    
    
  },
  list:{
      borderColor:'green'
  }
  ,
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    
    opacity:0.5,
    borderRadius: 26 ,
    
    margin: 10,
    width:300
},
  searchInput:{
    
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    width: 310,
    backgroundColor:'#ffffff',
    opacity:0.5,
    marginTop:1,
    borderRadius:26,
  },
  
ImageStyle: {
  padding: 10,
  margin: 5,
  marginLeft:10,
  height: 25,
  width: 25,
  position:'relative',
  alignItems: 'center'
},
});
