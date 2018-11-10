import{StyleSheet} from 'react-native'

export const Style=StyleSheet.create({
    atas:{
        flex:3,
        alignItems: 'center',
        backgroundColor:'#202021',
        justifyContent: 'center'
      },
      judul:{
        fontSize:40,
        color:'white',
        fontFamily:'velocity-demo'
    
      },
      bawah:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'#202021',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:5
      },
      text:{
        color:'white',
        fontSize:30,
        fontFamily:'Poppins-Thin',
        textAlignVertical:'center'
      },
      touch:{
          width:350,
          height:100,
          borderRadius:10,
          backgroundColor:'#516485',
          justifyContent:'center',
          flexDirection:'row',
          shadowColor:'#2354B0',
          shadowOffset:{
              width:50, 
              height:10
          },
          shadowOpacity:7,
          shadowRadius:1
      },
      img:{
          width:60, 
          height:60,
          alignItems:'baseline',
          marginLeft:150,
          marginTop:18
        }
})