import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './IsiQnA';
import icon from '../src/image/magnifier32.png'
import bgImage from '../src/image/Purple.jpg'

const KEYS_TO_FILTERS = ['user.name', 'subject'];
 
export default class QnA extends Component {
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
      <ImageBackground source={bgImage}style={styles.container}>
      <View>
        <View style={styles.Se}>
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
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('LMB')} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user}</Text>
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
    width:300
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
    borderWidth: 1
  }
});