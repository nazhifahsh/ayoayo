import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,ActivityIndicator, Image, ImageBackground} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './IsiQnA';
import icon from '../src/image/magnifier32.png'
import bgImage from '../src/image/qn1.jpg'
import { ListItem } from 'react-native-elements';

const KEYS_TO_FILTERS = ['name'];
 
export default class QandA extends Component {
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
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (

      <ImageBackground source={bgImage} style={styles.container}>

        <View style= {styles.SectionStyle}>
        
       <Image source={icon} style={{marginStart:10}}/>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
          </View>
        <ScrollView>
          
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('LMB',{subject:email.subject, isi:email.isi})}
               style={styles.emailItem}>
               <ListItem
        title={email.name}
        style={styles.list}
      />
              </TouchableOpacity>
            )
          })}
          
        </ScrollView>
      </ImageBackground>
      
      
     
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
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
    width:'90%'
},
  emailItem:{
    
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10
  }
});