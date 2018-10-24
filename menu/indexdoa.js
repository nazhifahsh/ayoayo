import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import doa from './doa';
const cari = ['user.name', 'subject'];
 
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
         Imagesource={icon}
         onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type here to search"
          />
        <ScrollView>
          {filteredEmails.map(doa => {
            return (
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('doadoa',{doa:doa.name})} style={styles.emailItem}>
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
