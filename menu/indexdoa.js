import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './doa';
import bgImage from '../src/image/deermount.jpg'
const KEYS_TO_FILTERS = ['user.name', 'subject'];
 
export default class App extends Component {
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
      
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
      <View >
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
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
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    backgroundColor:'#ffffff',
    opacity:0.6,
    width:300,
    borderRadius:26,
  }
});