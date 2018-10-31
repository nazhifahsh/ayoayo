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
    Doa: { screen: Doa, navigationOptions:{header:null} },
    doadoa: { screen: doadoa, navigationOptions:{header:null} },
    Konsul:{screen: Konsul, navigationOptions:{title:'Konsultasi Syariah', headerStyle: {backgroundColor:'#060628'} , headerTitleStyle:{color:'white'}, headerTintColor:'white'} },
    UstAulia:{screen: UstAulia, navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstBurhan:{screen: UstBurhan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    UstFauzan:{screen: UstFauzan,navigationOptions:{title:'Contact', headerStyle: {backgroundColor:'#202021'}, headerTitleStyle:{color:'white'}, headerTintColor:'white'}},
    QandA:{screen:QandA,navigationOptions:{header:null}},
    LMB:{screen:LMB,navigationOptions:{header:null}}
})
export default Routes