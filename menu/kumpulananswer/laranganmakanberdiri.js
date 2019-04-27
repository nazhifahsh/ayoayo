import React,{Component} from 'react';
import {Text, View ,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';


export default class LMB extends Component {
    constructor(props){
        super(props);
        this.state={
            pencet:false
        }
    }
    tet=()=>{
        this.setState({
            pencet:true
        })
    }
    tit=()=>{
        this.setState({
            pencet:false
        })
    }
    static navigationOptions = {
        title: 'Larangan Makan Berdiri',
    };
    render() {
        const { params } = this.props.navigation.state;
      const subject = params ? params.subject : null;
      const isi = params ? params.isi :null;
        return (
            <View style={styles.container}>
            <Text style={styles.judul}>
               {isi}
            </Text>

                <Video source={subject}
                       rate={1.0}
                       volume={1.0}
                       muted={false}
                       repeat={true}
                       paused={this.state.pencet}
                       title={this.props.title}
                       onback={() => null}
                       shouldPlay
                       resizeMode=""
                       style={{  width:'100%' ,height: 300, }}
                />
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.tet}>
                <Image source={require('../pausee.png') }style={{width:40, height:40}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.tit}>
                <Image source={require('../playy.png') }style={{width:40, height:40}}/>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex:1,
        backgroundColor:'#cbfee8',
        width:null,
        height:null
    },
    judul:{
        fontFamily:'unicephalon',
        fontSize:17,
        width:'75%',
        justifyContent:'center',
        textAlign:'center',
        height:120,
        backgroundColor:'#73e1ad',
        textAlignVertical:'center',
        borderRadius:20,
        alignItems:'center',
        marginTop:45

        
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