import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground, Image, Touchable } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import doa from './doa';
import bgImage from '../src/image/qn2.jpg'
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



      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      
       
        <View style={styles.SectionStyle}>

          <Image source={icon} style={{ marginStart: 10 }} />
          <SearchInput
            onChangeText={(term) => { this.searchUpdated(term) }}
            style={styles.searchInput}
            placeholder="Type a message to search"
          />
        </View>
        <ScrollView>
          {filteredEmails.map(doa => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('doadoa', { subject: doa.subject, isi: doa.isi, latin: doa.latin, arti: doa.arti })}
                style={styles.emailItem}>
                <ListItem
                  title={doa.subject}
                  style={styles.list}
                />

              </TouchableOpacity>

            )
          })
          }
        </ScrollView>
    
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    opacity: 0.5,
    borderRadius: 26,
    width: '80%',
    alignSelf: 'center',
    marginTop:5
  
  },
  searchInput: {

    padding: 10,

  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 10,
    height: 25,
    width: 25,
    position: 'relative',
    alignItems: 'center'
  },
  back:{
    padding:14,
    marginLeft:6,
    marginTop: 9,
  }
});
