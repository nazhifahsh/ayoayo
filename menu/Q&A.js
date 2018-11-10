import {Component} from 'react';
import {View, Text, StyleSheet, } from 'react-native';
import QnA from './IsiQnA'


export default class LMB extends Component {
   
    render() {
      const { params } = this.props.navigation.state;
      const isi = params ? params.isi : null;
      const subject = params ? params.subject:null;


  
      return(
          <View>
              <Text> {JSON.stringify(isi)}</Text>

          </View>

      )
    }
    }