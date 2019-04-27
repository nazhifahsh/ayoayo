import { StackNavigator } from 'react-navigation';
import Splash from './splash';
import Menu from '../menu/menu';
import Doa from '../menu/indexdoa';
import Konsul from '../menu/konsul';
import doadoa from '../menu/doadoa';
import QandA from '../menu/indexQ&A'; 
import LMB from '../menu/kumpulananswer/laranganmakanberdiri';
import UstAulia from '../menu/contactperson/ustadzaulia';
import UstBurhan from '../menu/contactperson/ustadzburhan';
import UstFauzan from '../menu/contactperson/ustadzfauzan';


const Routes = StackNavigator({
    Splash:{screen: Splash, navigationOptions:{header:null} },
    Menu: { screen: Menu, navigationOptions:{header:null} },
    Doa: { screen: Doa,  navigationOptions:{title:'Kumpulan Doa', headerStyle: {backgroundColor:'#c7e1e2',height:35, borderRadius: 15, marginTop: 9,} , headerTitleStyle:{color:'#29b7db',fontSize: 15,fontWeight:'100'}, headerTintColor:'#9f9ebf'} },
    doadoa: { screen: doadoa, navigationOptions:{headerTintColor:'#bad4ff'} },
    Konsul:{screen: Konsul, navigationOptions:{title:'Konsultasi Syariah', headerStyle: {backgroundColor:'#060628'} , headerTitleStyle:{color:'white'}, headerTintColor:'white'} },
    UstAulia:{screen: UstAulia, navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstBurhan:{screen: UstBurhan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstFauzan:{screen: UstFauzan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    QandA:{screen:QandA,navigationOptions:{title:'Kumpulan Video Nasihat', headerStyle: {backgroundColor:'#bbe2dd',height:45, borderRadius: 15,} , headerTitleStyle:{color:'#78aaff', fontWeight: '100',fontSize: 15,}, headerTintColor:'#9f9ebf'}},
    LMB:{screen:LMB,navigationOptions:{title:'Video',headerTintColor:'#bad4ff'}, headerTitleStyle:{color:'#fff'}}
})
export default Routes