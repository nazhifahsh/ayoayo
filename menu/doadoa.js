import React, {Component} from 'react';
import {Text, View} from 'react-native';
import doa from './doa';
export default class doadoa extends Component {
    render() {
        return (
           <View>       
              <Text>
                  {doa.name}
              </Text>
           </View>
        );
    }
}