import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
<<<<<<< HEAD
import doa from './doa';
const cari = ['user.name', 'subject'];
=======
import emails from './doa';
import icon from '../src/image/Cari.png'
import {Icon} from 'react-native-vector-icons'
import bgImage from '../src/image/deermount.jpg'
const KEYS_TO_FILTERS = ['user.name', 'subject'];
>>>>>>> 5ed93dede35c04b23fe388fe71415e6990200e97
 
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
    const filteredEmails = doa.filter(createFilter(this.state.searchTerm, cari))
    return (
      
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
      <View >
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
<<<<<<< HEAD
          placeholder="Type here to search"
          />
=======
          placeholder='Search Doa'
        />
>>>>>>> 5ed93dede35c04b23fe388fe71415e6990200e97
        <ScrollView>
          {filteredEmails.map(doa => {
            return (
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('doadoa')} style={styles.emailItem}>
                <View>
                  <Text>{doa.user}</Text>
                  <Text>{doa.name}</Text>
                  <Text style={styles.emailSubject}>{doa.subject}</Text>
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
    borderBottomWidth: 1,
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
    width: 310,
    backgroundColor:'#ffffff',
    opacity:0.5,
    borderRadius:26,
  }
});
