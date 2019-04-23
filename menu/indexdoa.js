import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import doa from './doa';
import bgImage from '../src/image/w1.jpg'
import icon from '../src/image/magnifier32.png'
import { ListItem } from 'react-native-elements';
import PushNotification from 'react-native-push-notification';

const cari = ['user.name', 'subject'];
 
export default class Doa extends Component {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const filteredEmails = doa.filter(createFilter(this.state.searchTerm, cari))
    return (
      
      
     
      <View  style={{backgroundColor:'#349586'}}>
        <View style= {styles.SectionStyle}>
        <Image source={icon} style={{marginStart:10}}/>
        <SearchInput 
         onChangeText={(term) => { this.searchUpdated(term) }} 
         
          placeholder="Type here to search"
          >
          </SearchInput>
          
          </View>
        <ScrollView>
        {filteredEmails.map(doa => {
          return(
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('doadoa',{ subject:doa.subject,isi:doa.isi, latin:doa.latin, arti:doa.arti})} 
           style={styles.emailItem}>
      <ListItem
        title={doa.subject}
        style={styles.list}
      />
      
      </TouchableOpacity>

        )})
    }
        </ScrollView>
      </View>
      
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
