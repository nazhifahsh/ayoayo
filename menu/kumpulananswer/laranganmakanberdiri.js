import React,{Component} from 'react';
import {Text, View ,Image,StyleSheet,Dimensions} from 'react-native';
import Video from 'react-native-video';


export default class LMB extends Component {
    static navigationOptions = {
        title: 'Larangan Makan Berdiri',
    };
    render() {
        const { params } = this.props.navigation.state;
      const subject = params ? params.subject : null;
      const isi = params ? params.isi :null;
        return (
            <View style={styles.container}>
            <Text>
               {isi}
            </Text>

                <Video source={subject}
                       rate={1.0}
                       volume={1.0}
                       muted={false}
                       repeat={true}
                       paused={false}
                       title={this.props.title}
                       onback={() => null}
                       shouldPlay
                       resizeMode=""
                       style={{  width:'100%' ,height: 300 }}
                />

                <View style={styles.controlBar}></View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    video:{
        position: 'absolute',
        flex:1,
        top:0,
        left:0,
        bottom:0,
        right:0,
        margin: 10,
   
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin: 10,
        marginRight: 10,
        color: "blue",
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
});