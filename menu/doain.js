//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class doain extends Component {
    constructor(props){
        super(props);
        this.state={
            doain:[{isiDoa:'Astaghfirullah'

            }]
        }
    }
        render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.doain[1]}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});