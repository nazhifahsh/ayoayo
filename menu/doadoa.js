import React, {Component} from 'react';
import {Text, View} from 'react-native';
import doa from './doa';
export default class doadoa extends Component {
   
    render() {
      const { params } = this.props.navigation.state;
      const subject = params ? params.subject : null;
      const latin= params ? params.latin : null;
      const arti = params ? params.arti : null;
      const isi = params ? params.isi : null;
  
      return(
        <View>
          <Text> {JSON.stringify(subject)}</Text>
          <Text> {JSON.stringify(isi)}</Text>
          <Text> {JSON.stringify(latin)}</Text>
          <Text> {JSON.stringify(arti)}</Text>
       
        </View>
        
        );
      }
    }
